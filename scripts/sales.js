'use strict';

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

var generateLists = (function(stores) {
  var sales = document.getElementById('sales');
  var store = document.createElement('table');
  var headers = document.createElement('th');
  var rows = document.createElement('tr');
  var storeNumbers = document.createElement('td');
  var total = document.createElement('td');
  store.className = 'store';
  rows.className = 'row';
  storeNumbers.className = 'store-data';
  total.className = 'store-data-item total';

  headers.textContent = 'Location Name';
  store.appendChild(headers.cloneNode(true));
  for (var i = 0; i < storeClose - storeOpen; i++) {
    headers.textContent = `${(i + storeOpen) < 13 ? i + storeOpen : i - storeOpen}:00${(i + storeOpen) < 12 ? 'am' : 'pm'}`;
    store.appendChild(headers.cloneNode(true));
  }
  headers.textContent = 'Total';
  store.appendChild(headers.cloneNode(true));

  for (var i = 0; i < stores.length; i++) {
    rows.textContent = stores[i].locationName;
    store.appendChild(rows.cloneNode(true));
  }
  rows.textContent = 'Totals';
  store.appendChild(rows.cloneNode(true));

  

  sales.appendChild(store);
}(stores));