# Interactive Table and Price Calculator Website

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