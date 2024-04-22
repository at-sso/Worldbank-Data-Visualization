document.addEventListener("DOMContentLoaded", function () {
  // Function to populate table data
  function populateTable(data) {
    var tableBody = document.getElementById("table-body");

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Loop through data and create table rows
    data.forEach(function (row) {
      var tr = document.createElement("tr");

      Object.values(row).forEach(function (value) {
        var td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      });

      tableBody.appendChild(tr);
    });
  }

  // Fetch data from server and populate table
  fetch("/data")
    .then((response) => response.json())
    .then((data) => populateTable(data));
});
