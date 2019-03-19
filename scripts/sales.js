'use strict';

var generateLists = (storeData) => {
  var sales = document.getElementById('sales');
  var store = document.createElement('section');
  var h2 = document.createElement('h2');
  var ul = document.createElement('ul');
  var total = document.createElement('li');
  store.className = 'store';
  h2.className = 'store-name';
  h2.textContent = storeData.locationName;
  ul.className = 'store-data';
  total.className = 'store-data-item total';
  total.textContent = `Total: ${storeData.totalDailyCookies} cookies`;

  for (var i = 0; i < storeClose - storeOpen; i++) {
    var li = document.createElement('li');
    li.className = 'store-data-item';
    li.textContent = `${(i + storeOpen) < 13 ? i + storeOpen : i - storeOpen}${(i + storeOpen) < 12 ? 'am' : 'pm'}: ${storeData.results[1][i]} cookies`;
    ul.appendChild(li);
  }
  sales.appendChild(store);
  store.appendChild(h2);
  store.appendChild(ul);
  ul.appendChild(total);
};

var stores = [
  new Store('1st and Pike', 23, 65, 6.3),
  new Store('SeaTac Airport', 3, 24, 1.2),
  new Store('Seattle Center', 11, 38, 3.7),
  new Store('Capitol Hill', 20, 38, 2.3),
  new Store('Alki', 2, 16, 4.6)
];

stores.forEach(store => {
  store.render();
  generateLists(store);
});