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
  var storeName = document.createElement('tr');
  var storeNumbers = document.createElement('td');
  var total = document.createElement('td');
  store.className = 'store';
  storeName.className = 'store-name';
  // storeName.textContent = storeData.locationName;
  storeNumbers.className = 'store-data';
  total.className = 'store-data-item total';
  // total.textContent = `${storeData.totalDailyCookies} cookies`;

  headers.textContent = 'Location Name';
  store.appendChild(headers.cloneNode(true));
  for (var i = 0; i < storeClose - storeOpen; i++) {
    headers.textContent = `${(i + storeOpen) < 13 ? i + storeOpen : i - storeOpen}${(i + storeOpen) < 12 ? 'am' : 'pm'}`;
    store.appendChild(headers.cloneNode(true));
  }

  // stores.forEach(function(store) {
  //   console.log(store);
  //   storeName.textContent = store.locationName;
  //   store.appendChild(storeName.cloneNode(true));
  // });
  // for (var i = 0; i < storeClose - storeOpen; i++) {
  //   var th = document.createElement('th');
  //   var td = document.createElement('td');
  //   th.className = 'store-data-timeframe';
  //   th.textContent = `${(i + storeOpen) < 13 ? i + storeOpen : i - storeOpen}${(i + storeOpen) < 12 ? 'am' : 'pm'}`;
  //   td.className = 'store-data-item';
  //   td.textContent = `${storeData.results[1][i]} cookies`;
  //   store.appendChild(th);
  //   storeNumbers.appendChild(td);
  // }
  sales.appendChild(store);
  // store.appendChild(storeName);
  // store.appendChild(storeNumbers);
  // storeNumbers.appendChild(total);
}(stores));