'use strict';

var generateTable = (function() {
  var storeTable = document.getElementById('store-table');
  var heading = document.createElement('th');
  var rows = document.createElement('tr');
  var storeNumbers = document.createElement('td');
  var total = document.createElement('td');
  heading.className = 'heading';
  total.className = 'store-data-item total';

  (function populateHeadings() {
    heading.textContent = 'Location Name';
    storeTable.appendChild(heading.cloneNode(true));
    for (var i = 0; i < storeClose - storeOpen; i++) {
      heading.textContent = `${(i + storeOpen) < 13 ? i + storeOpen : i - storeOpen}:00${(i + storeOpen) < 12 ? 'am' : 'pm'}`;
      storeTable.appendChild(heading.cloneNode(true));
    }
    heading.textContent = 'Total';
    storeTable.appendChild(heading.cloneNode(true));
  }());

  var stores = [
    new Store('1st and Pike', 23, 65, 6.3),
    new Store('SeaTac Airport', 3, 24, 1.2),
    new Store('Seattle Center', 11, 38, 3.7),
    new Store('Capitol Hill', 20, 38, 2.3),
    new Store('Alki', 2, 16, 4.6)
  ];

  stores.forEach(function(store) {
    store.render();
  });

  (function populateRows() {
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