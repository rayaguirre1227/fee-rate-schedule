const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Initialize SQLite database
const db = new Database('table-data.db');

// Create tables if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS table_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS price_mapping (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Initialize with default data if empty
const initData = db.prepare('SELECT COUNT(*) as count FROM table_data').get();
if (initData.count === 0) {
  const defaultTableData = [
    {
      rowHeader: 'Row 1',
      cells: [
        { content: 'Cell 1-1', columnHeader: 'Column 1' },
        { content: 'Cell 1-2', columnHeader: 'Column 2' }
      ]
    },
    {
      rowHeader: 'Row 2',
      cells: [
        { content: 'Cell 2-1', columnHeader: 'Column 1' },
        { content: 'Cell 2-2', columnHeader: 'Column 2' }
      ]
    }
  ];

  db.prepare('INSERT INTO table_data (data) VALUES (?)').run(JSON.stringify(defaultTableData));
  db.prepare('INSERT INTO price_mapping (data) VALUES (?)').run(JSON.stringify({}));
}

// API Routes

// Get table data
app.get('/api/table-data', (req, res) => {
  try {
    const row = db.prepare('SELECT data FROM table_data ORDER BY id DESC LIMIT 1').get();
    if (row) {
      res.json({ success: true, data: JSON.parse(row.data) });
    } else {
      // Return empty array if no data
      res.json({ success: true, data: [] });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Save table data
app.post('/api/table-data', (req, res) => {
  try {
    const { data } = req.body;
    // Delete old rows and insert new one to prevent unbounded growth
    const transaction = db.transaction(() => {
      db.prepare('DELETE FROM table_data').run();
      db.prepare('INSERT INTO table_data (data) VALUES (?)').run(JSON.stringify(data));
    });
    transaction();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get price mapping
app.get('/api/price-mapping', (req, res) => {
  try {
    const row = db.prepare('SELECT data FROM price_mapping ORDER BY id DESC LIMIT 1').get();
    if (row) {
      res.json({ success: true, data: JSON.parse(row.data) });
    } else {
      // Return empty object if no data
      res.json({ success: true, data: {} });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Save price mapping
app.post('/api/price-mapping', (req, res) => {
  try {
    const { data } = req.body;
    // Delete old rows and insert new one to prevent unbounded growth
    const transaction = db.transaction(() => {
      db.prepare('DELETE FROM price_mapping').run();
      db.prepare('INSERT INTO price_mapping (data) VALUES (?)').run(JSON.stringify(data));
    });
    transaction();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/first.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'first.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Open http://localhost:${PORT}/index.html in your browser');
});