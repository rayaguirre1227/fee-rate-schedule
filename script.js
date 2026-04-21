// Global data storage
let tableData = [];
let editingEnabled = true;
let priceMapping = {}; // Stores price calculations based on selections

// Selection state
let lastSelectedCell = null;
let lastSelectedRow = null;
let lastSelectedColumn = null;

// Cached DOM elements for performance
let mainTable, tableTbody, tableThead, addRowBtn, addColBtn, deleteRowBtn, deleteColBtn, refreshBtn, saveToGithubBtn, loadingOverlay;

// Debounce utility
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Clear selection cache (call when table structure changes)
function clearSelectionCache() {
    lastSelectedCell = null;
    lastSelectedRow = null;
    lastSelectedColumn = null;
}

// Authentication
let isAuthenticated = false;
const DEMO_CREDENTIALS = {
    username: 'admin',
    password: 'acgc123'
};

// API base URL
const API_BASE = '';

// Cache DOM elements for better performance
function cacheDOMElements() {
    mainTable = document.getElementById('main-table');
    if (mainTable) {
        tableTbody = mainTable.querySelector('tbody');
        tableThead = mainTable.querySelector('thead tr');
    }
    addRowBtn = document.getElementById('add-row');
    addColBtn = document.getElementById('add-col');
    deleteRowBtn = document.getElementById('delete-row');
    deleteColBtn = document.getElementById('delete-col');
    refreshBtn = document.getElementById('refresh-data');
    saveToGithubBtn = document.getElementById('save-to-github');
    loadingOverlay = document.getElementById('loading-overlay');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Cache DOM elements
    cacheDOMElements();

    // Check which page we're on
    const isLoginPage = document.querySelector('nav a[href="login.html"].active') !== null;
    const isFirstPage = document.querySelector('nav a[href="first.html"].active') !== null;
    const isSecondPage = document.querySelector('nav a[href="index.html"].active') !== null;

    // Check authentication status
    checkAuthStatus();

    // Update admin link based on auth status
    updateAdminLink();

    // Load saved data from server
    await loadSavedData();

    if (isLoginPage) {
        // If already authenticated, redirect to main page
        if (isAuthenticated) {
            window.location.href = 'index.html';
            return;
        }
        initLoginPage();
    } else if (isFirstPage) {
        // Allow access to page but hide authenticated-only buttons
        initTablePage();
    } else if (isSecondPage) {
        // Allow access to page but hide authenticated-only buttons
        initCalculatorPage();
    }
});

// Note: Removed automatic logout on beforeunload to prevent clearing auth during page navigation
// Users should explicitly logout using the logout button

// ========== AUTHENTICATION FUNCTIONS ==========

function checkAuthStatus() {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
        isAuthenticated = true;
    } else {
        isAuthenticated = false;
    }
}

function initLoginPage() {
    const loginForm = document.getElementById('login-form');
    const demoLoginBtn = document.getElementById('demo-login');
    const messageDiv = document.getElementById('login-message');

    const clearLoginBtn = document.getElementById('clear-login');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            handleLogin(username, password);
        });
    }

    if (clearLoginBtn) {
        clearLoginBtn.addEventListener('click', function() {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            messageDiv.textContent = '';
            messageDiv.className = 'message';
        });
    }
}

function handleLogin(username, password) {
    const messageDiv = document.getElementById('login-message');

    // Clear any previous message
    messageDiv.className = 'message';
    messageDiv.textContent = '';

    // Simple credential check
    if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
        // Successful login
        isAuthenticated = true;
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', username);

        messageDiv.textContent = 'Login successful! Redirecting...';
        messageDiv.className = 'message success';

        // Redirect to main page after short delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        // Failed login
        messageDiv.textContent = 'Invalid username or password. Please try again.';
        messageDiv.className = 'message error';
    }
}

function logout() {
    isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    updateAdminLink();

    // Re-initialize the current page to update editing permissions
    const isFirstPage = document.querySelector('nav a[href="first.html"].active') !== null;
    const isSecondPage = document.querySelector('nav a[href="index.html"].active') !== null;

    if (isFirstPage) {
        initTablePage();
    } else if (isSecondPage) {
        initCalculatorPage();
    }
}

function updateAdminLink() {
    const adminLink = document.getElementById('admin-link');
    if (adminLink) {
        if (isAuthenticated) {
            adminLink.textContent = 'Logout';
            adminLink.href = '#';
            adminLink.onclick = function(event) {
                event.preventDefault();
                logout();
            };
        } else {
            adminLink.textContent = 'Admin';
            adminLink.href = 'login.html';
            adminLink.onclick = null;
        }
    }
}

function redirectToLogin() {
    window.location.href = 'login.html';
}

// ========== PAGE 1: TABLE EDITOR ==========

function initTablePage() {
    // Set editing based on authentication status
    editingEnabled = isAuthenticated;

    // Hide authenticated-only buttons if not logged in
    if (!isAuthenticated) {
        if (addRowBtn) addRowBtn.style.display = 'none';
        if (addColBtn) addColBtn.style.display = 'none';
        if (deleteRowBtn) deleteRowBtn.style.display = 'none';
        if (deleteColBtn) deleteColBtn.style.display = 'none';
        if (saveToGithubBtn) saveToGithubBtn.style.display = 'none';
    }

    // Initialize table with saved data or default
    initializeTable();
    updateHeadersEditable();

    // Event listeners
    if (addRowBtn) addRowBtn.addEventListener('click', addRow);
    if (addColBtn) addColBtn.addEventListener('click', addColumn);
    if (deleteRowBtn) deleteRowBtn.addEventListener('click', deleteSelectedRow);
    if (deleteColBtn) deleteColBtn.addEventListener('click', deleteSelectedColumn);
    if (refreshBtn) refreshBtn.addEventListener('click', refreshTableData);
    if (saveToGithubBtn) saveToGithubBtn.addEventListener('click', saveToGitHub);

    // Save table data when cells are edited (debounced to avoid excessive calls)
    if (mainTable) {
        mainTable.addEventListener('input', debouncedSaveTableData);
        mainTable.addEventListener('blur', formatEditedTableCell, true);
        mainTable.addEventListener('blur', debouncedSaveTableData, true);

        // Cell selection highlighting
        mainTable.addEventListener('click', handleCellSelection);
        mainTable.addEventListener('focus', handleCellSelection, true);
    }
}

function initializeTable() {
    // If we have saved data, use it
    if (tableData.length > 0) {
        rebuildTableFromData();
    } else {
        // Extract initial data from existing table
        extractTableData();
        // Save the extracted data
        saveTableData();
    }
}

function extractTableData() {
    if (!mainTable) return;

    const rows = tableTbody ? tableTbody.querySelectorAll('tr') : [];
    const headers = tableThead ? tableThead.querySelectorAll('th') : [];

    tableData = [];

    // Get column headers (skip the first header which is "#")
    const columnHeaders = [];
    for (let i = 1; i < headers.length; i++) {
        columnHeaders.push(headers[i].textContent);
    }

    // Extract row data
    rows.forEach((row, rowIndex) => {
        const cells = row.querySelectorAll('td');
        const rowData = {
            rowHeader: cells[0].textContent,
            cells: []
        };

        for (let i = 1; i < cells.length; i++) {
            rowData.cells.push({
                content: cells[i].textContent,
                columnHeader: columnHeaders[i-1] || `Column ${i}`
            });
        }

        tableData.push(rowData);
    });

    // Update global tableData variable
    // Note: saveTableData() will be called separately if needed
}

function rebuildTableFromData() {
    if (!mainTable || !tableTbody || !tableThead) return;

    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
        // Clear existing rows (keep header row)
        tableTbody.innerHTML = '';

        // Rebuild header if we have column data
        if (tableData.length > 0 && tableData[0].cells.length > 0) {
            // Clear existing headers (keep first "#" header)
            while (tableThead.children.length > 1) {
                tableThead.lastChild.remove();
            }

            // Add column headers
            tableData[0].cells.forEach((cell, colIndex) => {
                const th = document.createElement('th');
                th.className = 'header-cell';
                th.textContent = cell.columnHeader || `Column ${colIndex + 1}`;
                th.contentEditable = editingEnabled;
                th.dataset.col = colIndex;
                tableThead.appendChild(th);
            });
        }

        // Use DocumentFragment for batch DOM updates
        const fragment = document.createDocumentFragment();

        // Rebuild rows
        tableData.forEach((rowData, rowIndex) => {
            const tr = document.createElement('tr');

            // Row header cell
            const rowHeaderCell = document.createElement('td');
            rowHeaderCell.className = 'row-header';
            rowHeaderCell.textContent = rowData.rowHeader || `Row ${rowIndex + 1}`;
            rowHeaderCell.contentEditable = editingEnabled;
            rowHeaderCell.dataset.row = rowIndex;
            tr.appendChild(rowHeaderCell);

            // Data cells
            rowData.cells.forEach((cell, cellIndex) => {
                const td = document.createElement('td');
                td.textContent = cell.content;
                td.contentEditable = editingEnabled;
                td.dataset.row = rowIndex;
                td.dataset.col = cellIndex;
                tr.appendChild(td);
            });

            fragment.appendChild(tr);
        });

        tableTbody.appendChild(fragment);
    });
}

function addRow() {
    if (!mainTable || !tableTbody || !tableThead) return;

    const headers = tableThead.querySelectorAll('th');
    const colCount = headers.length - 1; // Excluding row header

    const newRowIndex = tableData.length + 1;
    const tr = document.createElement('tr');

    // Row header cell
    const rowHeaderCell = document.createElement('td');
    rowHeaderCell.className = 'row-header';
    rowHeaderCell.textContent = `Row ${newRowIndex}`;
    rowHeaderCell.contentEditable = editingEnabled;
    rowHeaderCell.dataset.row = newRowIndex - 1;
    tr.appendChild(rowHeaderCell);

    // Data cells
    for (let i = 0; i < colCount; i++) {
        const td = document.createElement('td');
        td.textContent = `New Cell ${newRowIndex}-${i + 1}`;
        td.contentEditable = editingEnabled;
        td.dataset.row = newRowIndex - 1;
        td.dataset.col = i;
        tr.appendChild(td);
    }

    tableTbody.appendChild(tr);

    // Update tableData
    const rowData = {
        rowHeader: `Row ${newRowIndex}`,
        cells: []
    };

    for (let i = 0; i < colCount; i++) {
        rowData.cells.push({
            content: `New Cell ${newRowIndex}-${i + 1}`,
            columnHeader: headers[i + 1].textContent || `Column ${i + 1}`
        });
    }

    tableData.push(rowData);
    saveTableData();
}

function addColumn() {
    if (!mainTable || !tableThead || !tableTbody) return;

    const newColIndex = tableData[0] ? tableData[0].cells.length + 1 : 1;

    // Add column header
    const th = document.createElement('th');
    th.className = 'header-cell';
    th.textContent = `Column ${newColIndex}`;
    th.contentEditable = editingEnabled;
    th.dataset.col = newColIndex - 1;
    tableThead.appendChild(th);

    // Add cells to each row
    const rows = tableTbody.querySelectorAll('tr');
    rows.forEach((row, rowIndex) => {
        const td = document.createElement('td');
        td.textContent = `Cell ${rowIndex + 1}-${newColIndex}`;
        td.contentEditable = editingEnabled;
        td.dataset.row = rowIndex;
        td.dataset.col = newColIndex - 1;

        // Insert before the last cell (if any) or just append
        row.appendChild(td);

        // Update tableData
        if (tableData[rowIndex]) {
            tableData[rowIndex].cells.push({
                content: `Cell ${rowIndex + 1}-${newColIndex}`,
                columnHeader: `Column ${newColIndex}`
            });
        }
    });

    saveTableData();
}

function deleteSelectedRow() {
    if (!mainTable || !tableTbody) return;

    const selectedRow = getSelectedRow();

    if (selectedRow === -1) {
        alert('Please select a row by clicking on any cell in that row first.');
        return;
    }

    if (tableTbody.rows.length <= 1) {
        alert('Cannot delete the last row!');
        return;
    }

    // Remove from DOM
    tableTbody.deleteRow(selectedRow);

    // Remove from tableData
    tableData.splice(selectedRow, 1);

    // Update row headers
    updateRowHeaders();

    saveTableData();
}

function deleteSelectedColumn() {
    if (!mainTable || !tableThead || !tableTbody) return;

    const selectedCol = getSelectedColumn();

    if (selectedCol === -1) {
        alert('Please select a column by clicking on any cell in that column first.');
        return;
    }

    if (tableThead.cells.length <= 2) { // At least one data column + row header
        alert('Cannot delete the last column!');
        return;
    }

    // Remove column header
    tableThead.deleteCell(selectedCol + 1); // +1 for row header

    // Remove cells from each row
    const rows = tableTbody.querySelectorAll('tr');

    rows.forEach((row, rowIndex) => {
        row.deleteCell(selectedCol + 1); // +1 for row header

        // Update tableData
        if (tableData[rowIndex]) {
            tableData[rowIndex].cells.splice(selectedCol, 1);
        }
    });

    // Update column headers
    updateColumnHeaders();

    saveTableData();
}

function getSelectedRow() {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.tagName === 'TD' && activeElement.closest('#main-table')) {
        const selectedRow = parseInt(activeElement.dataset.row, 10);
        if (!Number.isNaN(selectedRow)) {
            return selectedRow;
        }
    }

    if (lastSelectedRow) {
        if (lastSelectedRow.tagName === 'TR') {
            return lastSelectedRow.sectionRowIndex;
        }
        const selectedRow = parseInt(lastSelectedRow.dataset.row, 10);
        if (!Number.isNaN(selectedRow)) {
            return selectedRow;
        }
    }

    return -1;
}

function getSelectedColumn() {
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === 'TD' || activeElement.tagName === 'TH') && activeElement.closest('#main-table')) {
        const selectedCol = parseInt(activeElement.dataset.col, 10);
        if (!Number.isNaN(selectedCol)) {
            return selectedCol;
        }
    }

    if (lastSelectedColumn) {
        const selectedCol = parseInt(lastSelectedColumn.dataset.col, 10);
        if (!Number.isNaN(selectedCol)) {
            return selectedCol;
        }
    }

    return -1;
}

function updateRowHeaders() {
    if (!mainTable || !tableTbody) return;

    const rows = tableTbody.querySelectorAll('tr');

    rows.forEach((row, index) => {
        const rowHeaderCell = row.querySelector('.row-header');
        if (rowHeaderCell) {
            rowHeaderCell.textContent = `Row ${index + 1}`;

            // Update tableData
            if (tableData[index]) {
                tableData[index].rowHeader = `Row ${index + 1}`;
            }
        }
    });
}

function updateColumnHeaders() {
    if (!mainTable || !tableThead) return;

    const headers = tableThead.querySelectorAll('th');

    headers.forEach((header, index) => {
        if (index > 0) { // Skip first header (#)
            // Get the column header from tableData if available, otherwise use generic name
            const columnHeader = tableData.length > 0 && tableData[0].cells[index - 1] ?
                tableData[0].cells[index - 1].columnHeader : `Column ${index}`;
            header.textContent = columnHeader;
        }
    });
}

// Debounced save function (300ms delay)
const debouncedSaveTableData = debounce(async function() {
    // Extract current table data
    extractTableData();

    // Save to server
    try {
        await fetch('/api/table-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: tableData })
        });
    } catch (error) {
        console.error('Error saving table data:', error);
    }

    // Also save to localStorage as backup
    localStorage.setItem('tableEditorData', JSON.stringify(tableData));

    // Also update price mapping for page 2
    updatePriceMapping();
}, 300);

// Original function for immediate saves when needed (e.g., adding/deleting rows/columns)
async function saveTableData() {
    // Extract current table data
    extractTableData();

    // Check if data has actually changed
    const currentDataStr = JSON.stringify(tableData);
    if (saveTableData.lastSavedData === currentDataStr) {
        return; // No changes, skip save
    }
    saveTableData.lastSavedData = currentDataStr;

    // Save to server
    try {
        await fetch('/api/table-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: tableData })
        });
    } catch (error) {
        console.error('Error saving table data:', error);
    }

    // Also save to localStorage as backup
    localStorage.setItem('tableEditorData', JSON.stringify(tableData));

    // Also update price mapping for page 2
    updatePriceMapping();
}

// Initialize last saved data
saveTableData.lastSavedData = null;

async function loadSavedData() {
    try {
        // Show loading overlay
        if (loadingOverlay) loadingOverlay.style.display = 'flex';

        // Load from server
        const response = await fetch('/api/table-data');
        const result = await response.json();
        if (result.success && result.data) {
            tableData = result.data;
        }
    } catch (error) {
        console.error('Error loading table data from server:', error);
        // Fallback to localStorage
        const savedData = localStorage.getItem('tableEditorData');
        if (savedData) {
            tableData = JSON.parse(savedData);
        }
    } finally {
        // Hide loading overlay
        if (loadingOverlay) loadingOverlay.style.display = 'none';
    }

    // Set last saved data for change detection
    saveTableData.lastSavedData = JSON.stringify(tableData);

    // Note: editingEnabled is now determined by authentication status, not saved state
}

async function refreshTableData() {
    try {
        // Show loading state
        if (refreshBtn) {
            refreshBtn.textContent = 'Loading...';
            refreshBtn.disabled = true;
        }

        // Load latest data from server
        const response = await fetch('/api/table-data');
        const result = await response.json();
        if (result.success && result.data) {
            tableData = result.data;
            // Rebuild the table with new data
            rebuildTableFromData();
            updateHeadersEditable();
        } else {
            alert('Failed to refresh data from server.');
        }
    } catch (error) {
        console.error('Error refreshing table data:', error);
        alert('Error refreshing data. Please check your connection.');
    } finally {
        // Reset button state
        if (refreshBtn) {
            refreshBtn.textContent = 'Refresh Data';
            refreshBtn.disabled = false;
        }
    }
}

function parseAmount(value) {
    if (value == null) return 0;
    const sanitized = String(value).trim().replace(/[^0-9.-]+/g, '');
    const parsed = parseFloat(sanitized);
    return Number.isFinite(parsed) ? parsed : 0;
}

function isValidAmount(value) {
    if (value == null) return false;
    const sanitized = String(value).trim().replace(/[^0-9.-]+/g, '');
    return sanitized.length > 0 && !Number.isNaN(parseFloat(sanitized));
}

function formatCurrency(value) {
    const amount = parseAmount(value);
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function formatEditedTableCell(event) {
    const cell = event.target;
    if (!cell || cell.tagName !== 'TD') return;
    if (cell.classList.contains('row-header')) return;

    const value = cell.textContent.trim();
    if (isValidAmount(value)) {
        cell.textContent = formatCurrency(value);
    }
}

function getCellContent(rowHeader, columnHeader) {
    const rowData = tableData.find(row => row.rowHeader === rowHeader);
    if (!rowData) return null;
    const cell = rowData.cells.find(cell => cell.columnHeader === columnHeader);
    return cell ? cell.content : null;
}

function showAmountWarning(message) {
    const warningDiv = document.getElementById('amount-warning');
    if (!warningDiv) return;
    warningDiv.textContent = message;
    warningDiv.classList.add('error');
}

function hideAmountWarning() {
    const warningDiv = document.getElementById('amount-warning');
    if (!warningDiv) return;
    warningDiv.textContent = '';
    warningDiv.classList.remove('error');
}

async function updatePriceMapping() {
    // Create a mapping from row header + column header to the actual cell amount
    priceMapping = {};

    tableData.forEach((rowData) => {
        rowData.cells.forEach((cell) => {
            const key = `${rowData.rowHeader}-${cell.columnHeader}`;
            const amount = parseAmount(cell.content);
            priceMapping[key] = amount;
        });
    });

    // Save to server
    try {
        await fetch('/api/price-mapping', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: priceMapping })
        });
    } catch (error) {
        console.error('Error saving price mapping:', error);
    }

    // Also save to localStorage for page 2
    localStorage.setItem('priceMapping', JSON.stringify(priceMapping));
}

function handleCellSelection(event) {
    const cell = event.target;
    // Only process table cells (TD) and header cells (TH)
    if (!cell.closest('#main-table') || (cell.tagName !== 'TD' && cell.tagName !== 'TH')) {
        return;
    }

    const table = document.getElementById('main-table');

    // Clear previous selections if any
    if (lastSelectedCell) {
        lastSelectedCell.classList.remove('selected');
    }
    if (lastSelectedRow) {
        lastSelectedRow.classList.remove('selected-row');
    }
    if (lastSelectedColumn) {
        lastSelectedColumn.classList.remove('selected-column');
    }

    // Clear any other selections that might still exist (safety)
    const selectedCells = table.querySelectorAll('.selected');
    selectedCells.forEach(c => c.classList.remove('selected'));
    const selectedRows = table.querySelectorAll('.selected-row');
    selectedRows.forEach(r => r.classList.remove('selected-row'));
    const selectedColumns = table.querySelectorAll('.selected-column');
    selectedColumns.forEach(c => c.classList.remove('selected-column'));

    // Add selection to current cell only
    cell.classList.add('selected');
    lastSelectedCell = cell;

    // Determine if it's a row header, column header, or data cell
    const isRowHeader = cell.classList.contains('row-header');
    const isColumnHeader = cell.tagName === 'TH' && cell.classList.contains('header-cell');

    if (isRowHeader) {
        // For row headers, highlight the entire row
        const row = cell.closest('tr');
        if (row) {
            row.classList.add('selected-row');
            lastSelectedRow = row;
        }
    } else if (isColumnHeader) {
        // For column headers, highlight all cells in that column
        const colIndex = parseInt(cell.dataset.col) + 1; // +1 for row header column
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const td = row.cells[colIndex];
            if (td) {
                td.classList.add('selected');
            }
        });
        // Also highlight the column header with selected-column class
        cell.classList.add('selected-column');
        lastSelectedColumn = cell;
    }

}

// ========== PAGE 2: PRICE CALCULATOR ==========

async function initCalculatorPage() {
    const calculatorBody = document.getElementById('calculator-body');
    const refreshBtn = document.getElementById('refresh-data');
    const totalPriceElement = document.getElementById('total-price');

    // Hide authenticated-only buttons if not logged in
    if (!isAuthenticated) {
        if (refreshBtn) refreshBtn.style.display = 'none';
    }

    // Load price mapping from server
    try {
        const response = await fetch('/api/price-mapping');
        const result = await response.json();
        if (result.success && result.data) {
            priceMapping = result.data;
        }
    } catch (error) {
        console.error('Error loading price mapping:', error);
        // Fallback to localStorage
        const savedPriceMapping = localStorage.getItem('priceMapping');
        if (savedPriceMapping) {
            priceMapping = JSON.parse(savedPriceMapping);
        }
    }

    // Generate 10 rows of dropdowns
    generateCalculatorRows();

    // Hide warning initially
    hideAmountWarning();

    // Calculate initial total
    calculateTotal();

    // Event listeners
    refreshBtn.addEventListener('click', refreshData);

    // Listen for dropdown changes
    calculatorBody.addEventListener('change', function(event) {
        if (event.target.tagName === 'SELECT') {
            updatePriceForRow(event.target.closest('tr'));
            calculateTotal();
        }
    });
}

function generateCalculatorRows() {
    const calculatorBody = document.getElementById('calculator-body');
    calculatorBody.innerHTML = '';

    // Get options from tableData
    const rowOptions = getRowOptions();
    const columnOptions = getColumnOptions();

    // Create option templates for cloning
    const rowOptionTemplate = document.createElement('option');
    const colOptionTemplate = document.createElement('option');

    // Use DocumentFragment for batch DOM updates
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 10; i++) {
        const tr = document.createElement('tr');

        // Row number
        const rowNumCell = document.createElement('td');
        rowNumCell.textContent = i + 1;
        tr.appendChild(rowNumCell);

        // Column 1 dropdown (row selection)
        const dropdown1Cell = document.createElement('td');
        const select1 = document.createElement('select');
        select1.className = 'row-select';
        select1.dataset.rowIndex = i;

        // Add default option
        const defaultOption1 = document.createElement('option');
        defaultOption1.value = '';
        defaultOption1.textContent = 'Select Code';
        select1.appendChild(defaultOption1);

        // Add row options
        rowOptions.forEach(option => {
            const opt = rowOptionTemplate.cloneNode(false);
            opt.value = option.value;
            opt.textContent = option.text;
            select1.appendChild(opt);
        });

        dropdown1Cell.appendChild(select1);
        tr.appendChild(dropdown1Cell);

        // Column 2 dropdown (column selection)
        const dropdown2Cell = document.createElement('td');
        const select2 = document.createElement('select');
        select2.className = 'col-select';
        select2.dataset.rowIndex = i;

        // Add default option
        const defaultOption2 = document.createElement('option');
        defaultOption2.value = '';
        defaultOption2.textContent = 'Select Insurance';
        select2.appendChild(defaultOption2);

        // Add column options
        columnOptions.forEach(option => {
            const opt = colOptionTemplate.cloneNode(false);
            opt.value = option.value;
            opt.textContent = option.text;
            select2.appendChild(opt);
        });

        dropdown2Cell.appendChild(select2);
        tr.appendChild(dropdown2Cell);

        // Price column
        const priceCell = document.createElement('td');
        priceCell.className = 'price-cell';
        priceCell.textContent = '$0.00';
        priceCell.dataset.rowIndex = i;
        tr.appendChild(priceCell);

        fragment.appendChild(tr);
    }

    calculatorBody.appendChild(fragment);
}

function getRowOptions() {
    const options = [];

    if (tableData.length > 0) {
        tableData.forEach((rowData, index) => {
            options.push({
                value: rowData.rowHeader,
                text: rowData.rowHeader
            });
        });
    } else {
        // Default options if no table data
        for (let i = 1; i <= 5; i++) {
            options.push({
                value: `Row ${i}`,
                text: `Row ${i}`
            });
        }
    }

    return options;
}

function getColumnOptions() {
    const options = [];

    if (tableData.length > 0 && tableData[0].cells.length > 0) {
        tableData[0].cells.forEach((cell, index) => {
            options.push({
                value: cell.columnHeader,
                text: cell.columnHeader
            });
        });
    } else {
        // Default options if no table data
        for (let i = 1; i <= 5; i++) {
            options.push({
                value: `Column ${i}`,
                text: `Column ${i}`
            });
        }
    }

    return options;
}

function updatePriceForRow(row) {
    const rowIndex = parseInt(row.querySelector('.row-select').dataset.rowIndex);
    const rowSelect = row.querySelector('.row-select');
    const colSelect = row.querySelector('.col-select');
    const priceCell = row.querySelector('.price-cell');

    const selectedRow = rowSelect.value;
    const selectedCol = colSelect.value;

    if (selectedRow && selectedCol) {
        const key = `${selectedRow}-${selectedCol}`;
        const content = getCellContent(selectedRow, selectedCol);
        const price = priceMapping[key] || 0;
        
        // Check if content contains a "$" symbol
        const hasDollarSign = content && String(content).includes('$');

        if (!hasDollarSign) {
            priceCell.textContent = 'error';
            priceCell.classList.add('error-state');
            priceCell.dataset.price = 0;
        } else {
            priceCell.classList.remove('error-state');
            hideAmountWarning();
            priceCell.textContent = `$${price.toFixed(2)}`;
            priceCell.dataset.price = price;
        }
    } else {
        priceCell.classList.remove('error-state');
        hideAmountWarning();
        priceCell.textContent = '$0.00';
        priceCell.dataset.price = 0;
    }
}

function calculateTotal() {
    const priceCells = document.querySelectorAll('.price-cell');
    let total = 0;
    let hasError = false;

    priceCells.forEach(cell => {
        // Check if cell contains "error"
        if (cell.textContent.trim() === 'error') {
            hasError = true;
        } else {
            const price = parseFloat(cell.dataset.price) || 0;
            total += price;
        }
    });

    const totalPriceElement = document.getElementById('total-price');
    if (hasError) {
        totalPriceElement.textContent = 'error';
        totalPriceElement.classList.add('error-state');
    } else {
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
        totalPriceElement.classList.remove('error-state');
    }
}

async function refreshData() {
    // Reload data from server
    await loadSavedData();

    // Update price mapping from server
    try {
        const response = await fetch('/api/price-mapping');
        const result = await response.json();
        if (result.success && result.data) {
            priceMapping = result.data;
        }
    } catch (error) {
        console.error('Error refreshing price mapping:', error);
    }

    // Regenerate dropdowns with updated options
    generateCalculatorRows();

    // Hide warnings and recalculate total
    hideAmountWarning();
    calculateTotal();

    alert('Data refreshed from table editor!');
}

function updateHeadersEditable() {
    const table = document.getElementById('main-table');
    if (!table) return;

    // Update row headers
    const rowHeaders = table.querySelectorAll('tbody td.row-header');
    rowHeaders.forEach(cell => {
        cell.contentEditable = editingEnabled;
    });

    // Update column headers (skip the first "#" header)
    const columnHeaders = table.querySelectorAll('thead th.header-cell');
    columnHeaders.forEach((header, index) => {
        if (index > 0) {
            header.contentEditable = editingEnabled;
        }
    });
}

// ========== GITHUB SAVE FUNCTIONALITY ==========

async function saveToGitHub() {
    if (!isAuthenticated) {
        alert('You must be logged in to save to GitHub.');
        return;
    }

    try {
        // Show loading state
        if (saveToGithubBtn) {
            saveToGithubBtn.textContent = 'Saving to GitHub...';
            saveToGithubBtn.disabled = true;
        }

        // Extract current table data
        extractTableData();

        // Call the backend API to save to GitHub
        const response = await fetch('/api/save-to-github', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                data: tableData,
                timestamp: new Date().toISOString(),
                username: localStorage.getItem('username') || 'unknown'
            })
        });

        const result = await response.json();

        if (result.success) {
            alert('✓ Table data successfully saved to GitHub!');
        } else {
            alert(`Error saving to GitHub: ${result.error || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error saving to GitHub:', error);
        alert(`Error saving to GitHub: ${error.message}`);
    } finally {
        // Reset button state
        if (saveToGithubBtn) {
            saveToGithubBtn.textContent = 'Save to GitHub';
            saveToGithubBtn.disabled = false;
        }
    }
}