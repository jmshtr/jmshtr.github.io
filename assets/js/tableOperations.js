// Function to adjust the column widths of the header elements based on the width of corresponding table cells
function adjustColumnWidths() {
    var headerElement = document.querySelector(".header"); // Selecting the header element
    var listItems = headerElement.querySelectorAll("li"); // Selecting all list items within the header element
    var postsElement = document.querySelector(".posts"); // Selecting the posts element
    var tableCells = postsElement.querySelectorAll("td"); // Selecting all table cells within the posts element

    // Looping through a maximum of the first 3 list items
    for (var i = 0; i < Math.min(listItems.length, 3); i++) {
        // Adjusting the width of each list item based on the width of corresponding table cells
        listItems[i].style.width = (tableCells[i].clientWidth - 7) + "px";
    }
}

// Call the adjustColumnWidths function when the window is loaded or resized
window.onload = adjustColumnWidths;
window.onresize = adjustColumnWidths;

// Function to sort the table rows based on the content of a specific column
function sort(x) {
    var tableElement = document.querySelector("table"); // Selecting the table element
    var tableRows = Array.from(document.querySelectorAll("tr")); // Converting all table rows into an array
    
    // Creating an array to store the data of each row
    var rowData = tableRows.map(function(row) {
        return { order: row.innerText, code: row.innerHTML }; // Storing the text content and HTML code of each row
    });

    // Sorting based on the specified column (1 for ascending, 2 for descending)
    if (x === 1 || x === 2) {
        var isAscending = x === 1; // Determining whether to sort in ascending order
        var firstRow = tableElement.querySelector("tr:first-child"); // Selecting the header row
        tableElement.innerHTML = ""; // Clearing the table content
        tableElement.appendChild(firstRow); // Re-appending the header row

        rowData.splice(0, 1); // Remove the header row from the data array

        // Sorting the data array based on the order value (text content of the specified column)
        rowData.sort(function(a, b) {
            var orderA = a.order.toUpperCase(); // Converting text to uppercase for case-insensitive comparison
            var orderB = b.order.toUpperCase();
            if (orderA < orderB) return isAscending ? -1 : 1; // Sorting condition for ascending or descending order
            if (orderA > orderB) return isAscending ? 1 : -1;
            return 0; // Return 0 if values are equal
        });

        // Reconstructing the table with sorted rows
        rowData.forEach(function(data) {
            var newRow = document.createElement("tr"); // Creating a new row element
            newRow.innerHTML = data.code; // Setting the inner HTML of the new row to the stored HTML code
            tableElement.appendChild(newRow); // Appending the new row to the table
        });
    }
}
