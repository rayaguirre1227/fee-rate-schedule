# Interactive Table and Price Calculator Website

This website consists of two pages with interactive features and uses a local SQLite database for data persistence.

## Setup and Running the Application

1. **Install Dependencies**:
   ```
   npm install
   ```

2. **Start the Server**:
   ```
   node server.js
   ```
   Or use the provided `launch.bat` file to install dependencies and start the server.

3. **Access the Website**:
   Open your browser and navigate to `http://localhost:3000/index.html` for the Price Calculator or `http://localhost:3000/first.html` for the Master Fee Schedule.

**Important**: Do not open the HTML files directly in the browser (e.g., by double-clicking). The application requires the Node.js server to be running for database access and API functionality.

## Page 1: Price Calculator
- 10 rows of dropdown selectors (2 dropdowns per row)
- Dropdown options populated from the Master Fee Schedule table data
- Automatic price calculation based on selections
- Total price display for all rows
- Refresh button to update data from the Master Fee Schedule

## Page 2: Master Fee Schedule
- Interactive table with editable cells (requires admin login)
- Buttons to add/delete rows and columns
- Data is automatically saved to the SQLite database
- Table structure and content persist across sessions and browsers

## Features

### Price Calculator Features:
1. **Dropdown Selections**: Each row has two dropdowns - one for row selection and one for column selection
2. **Automatic Price Calculation**: Price is calculated based on the combination of selections
3. **Total Price**: Sum of all row prices displayed at the bottom
4. **Data Refresh**: Updates dropdown options with latest data from the Master Fee Schedule

### Master Fee Schedule Features:
1. **Add Row**: Adds a new row at the bottom of the table
2. **Add Column**: Adds a new column at the right of the table
3. **Delete Selected Row**: Deletes the row containing the currently selected cell
4. **Delete Selected Column**: Deletes the column containing the currently selected cell
5. **Admin Login**: Required for editing the table
6. **Real-time Saving**: Changes are automatically saved to the database

## Technical Details

- **Backend**: Node.js with Express.js
- **Database**: SQLite (local file: `table-data.db`)
- **Frontend**: Vanilla JavaScript, HTML, CSS
- **Data Storage**: Persistent SQLite database, accessible across all browsers and sessions

## Files
- `server.js`: Node.js server with API endpoints
- `index.html`: Price Calculator page
- `first.html`: Master Fee Schedule page
- `login.html`: Admin login page
- `script.js`: Client-side JavaScript functionality
- `style.css`: Styling for all pages
- `package.json`: Node.js dependencies

## Browser Compatibility

Works in modern browsers with JavaScript enabled. Tested in Chrome, Firefox, and Edge.

## Notes

- Table data from the Master Fee Schedule is used to populate dropdown options on the Price Calculator
- Price calculation is based on cell position and content length (demo logic)
- In a real application, price mapping would be more sophisticated# Interactive Table and Price Calculator Website

This website consists of two pages with interactive features:

## Page 1: Table Editor
- Interactive table with editable cells
- Buttons to add/delete rows and columns
- Lock/Unlock button to toggle editing capability
- Data is automatically saved to browser's localStorage
- Table structure and content persist between sessions

## Page 2: Price Calculator
- 10 rows of dropdown selectors (2 dropdowns per row)
- Dropdown options populated from Page 1 table data
- Automatic price calculation based on selections
- Total price display for all rows
- Refresh button to update data from Page 1

## Features

### Table Editor Features:
1. **Add Row**: Adds a new row at the bottom of the table
2. **Add Column**: Adds a new column at the right of the table
3. **Delete Selected Row**: Deletes the row containing the currently selected cell
4. **Delete Selected Column**: Deletes the column containing the currently selected cell

### Price Calculator Features:
1. **Dropdown Selections**: Each row has two dropdowns - one for row selection and one for column selection
2. **Automatic Price Calculation**: Price is calculated based on the combination of selections
3. **Total Price**: Sum of all row prices displayed at the bottom
4. **Data Refresh**: Updates dropdown options with latest data from Page 1

## How to Use

1. Open `index.html` in a web browser
2. Edit table cells by clicking on them (when unlocked)
3. Use buttons to modify table structure
4. Navigate to Page 2 using the navigation link
5. Select options from dropdowns to see price calculations
6. Return to Page 1 to edit table, then refresh data on Page 2

## Technical Details

[data is stored in the browser's localStorage, so it persists between page reloads but is specific to the browser and device.

- **Files**:
  - `index.html`: Table editor page
  - `second.html`: Price calculator page
  - `style.css`: Styling for both pages
  - `script.js`: JavaScript functionality for both pages

## Browser Compatibility

Works in modern browsers with JavaScript enabled. Tested in Chrome, Firefox, and Edge.

## Notes

- Table data from Page 1 is used to populate dropdown options on Page 2
- Price calculation is based on cell position and content length (demo logic)
- In a real application, price mapping would be more sophisticated