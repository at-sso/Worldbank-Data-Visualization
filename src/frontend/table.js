document.addEventListener("DOMContentLoaded", function () {
  var loadingMessage = document.getElementById("loading-message");
  var table = document.getElementById("vaccination-table");

  function populateTable(data) {
    var tableBody = document.getElementById("table-body");

    tableBody.innerHTML = "";

    data.forEach(function (row) {
      var tr = document.createElement("tr");

      Object.values(row).forEach(function (value) {
        var td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      });

      tableBody.appendChild(tr);
    });

    table.style.display = "table";
    loadingMessage.style.display = "none";
  }

  fetch("/data")
    .then((response) => response.json())
    .then((data) => populateTable(data))
    .catch((error) => {
      console.error("Error fetching data:", error);
      loadingMessage.textContent = "Failed to load data.";
    });
});
