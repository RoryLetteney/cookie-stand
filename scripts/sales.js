'use strict';

var generateStoresTable = (function() {
  var storeTable = document.getElementById('store-table');
  var staffTable = document.getElementById('staff-table');
  var tables = [storeTable, staffTable];
  var heading = document.createElement('th');
  var rows = document.createElement('tr');
  var storeNumbers = document.createElement('td');
  var total = document.createElement('td');
  heading.className = 'heading';
  total.className = 'store-data-item total';

  var populateHeadings = function(table, needTotal) {
    heading.textContent = 'Location Name';
    table.appendChild(heading.cloneNode(true));
    for (var i = 0; i < storeClose - storeOpen; i++) {
      heading.textContent = `${(i + storeOpen) < 13 ? i + storeOpen : i - storeOpen}:00${(i + storeOpen) < 12 ? 'am' : 'pm'}`;
      table.appendChild(heading.cloneNode(true));
    }
    if (needTotal) {
      heading.textContent = 'Total';
      table.appendChild(heading.cloneNode(true));
    }
  };
  populateHeadings(storeTable, true);

  (function generateStaffTable() {
    populateHeadings(staffTable, false);
  }());

  var stores = [
    new Store('1st and Pike', 23, 65, 6.3, tables),
    new Store('SeaTac Airport', 3, 24, 1.2, tables),
    new Store('Seattle Center', 11, 38, 3.7, tables),
    new Store('Capitol Hill', 20, 38, 2.3, tables),
    new Store('Alki', 2, 16, 4.6, tables)
  ];

  stores.forEach(function(store) {
    store.render();
  });

  (function populateTotalRow() {
    rows.textContent = 'Totals';
    var totalRow = storeTable.appendChild(rows.cloneNode(true));
    totalRow.className = 'totals-row';
    var hourlyTotals = [];
    for (var i = 0; i < storeClose - storeOpen; i++) {
      hourlyTotals[i] = 0;
    }
    stores.forEach(function(store) {
      for (var i = 0; i < storeClose - storeOpen; i++) {
        hourlyTotals[i] += store.cookiesPerHour[i];
      }
    });
    for (var i = 0; i < storeClose - storeOpen; i++) {
      storeNumbers.textContent = hourlyTotals[i];
      totalRow.appendChild(storeNumbers.cloneNode(true));
    }
    storeNumbers.textContent = hourlyTotals.reduce(function(total, num) {return total + num;});
    totalRow.appendChild(storeNumbers.cloneNode(true));
  }());

  

}());