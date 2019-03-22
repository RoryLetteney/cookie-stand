'use strict';

var newStoreForm = document.getElementById('add-new-location');
var newStoreFormElements = Object.values(newStoreForm.elements);
var updateStoreForm = document.getElementById('update-store-data');
var updateStoreFormElements = Object.values(updateStoreForm.elements);
var storeTable = document.getElementById('store-table');
var staffTable = document.getElementById('staff-table');
var tables = [storeTable, staffTable];
var heading = document.createElement('th');
var rows = document.createElement('tr');
var storeNumbers = document.createElement('td');
var total = document.createElement('td');
heading.className = 'heading';
total.className = 'store-data-item total';

var addNewStore = function(e) {
  e.preventDefault();
  var newStoreData = [];
  newStoreFormElements.forEach(function(element) {
    if (newStoreFormElements.indexOf(element) > 0 && newStoreFormElements.indexOf(element) < newStoreFormElements.length - 1) {
      newStoreData.push(element.value);
    }
  });
  stores.push(new Store(newStoreData[0], parseInt(newStoreData[1]), parseInt(newStoreData[2]), parseFloat(newStoreData[3]), tables));
  stores[stores.length - 1].render();
  storeTable.deleteRow(-1);
  populateTotalRow();
};

var updateStoreData = function(e) {
  e.preventDefault();
  var exists = false;
  var currentTableData = [];
  var storeToRender;
  var updatedData = [];
  updateStoreFormElements.forEach(function(element) {
    if (updateStoreFormElements.indexOf(element) > 0 && updateStoreFormElements.indexOf(element) < updateStoreFormElements.length - 1) {
      updatedData.push(element.value);
    }
  });
  for (var i = 0; i < tables.length; i++) {
    currentTableData[i] = Object.values(tables[i].getElementsByTagName('tr'));
  }
  for (var i = 0; i < currentTableData.length; i++) {
    for (var a = 0; a < currentTableData[i].length; a++) {
      var currentLocationName = currentTableData[i][a].innerHTML.substr(0, currentTableData[i][a].innerHTML.indexOf('<'));
      currentTableData[i][a] = currentLocationName;
      if (currentLocationName === updateStoreFormElements[1].value) {
        tables[i].deleteRow(a);
        exists = true;
      }
    }
  }
  if (exists) {
    storeTable.deleteRow(-1);
    stores.splice(storeToRender, 1);
    stores.push(new Store(updatedData[0], parseInt(updatedData[1]), parseInt(updatedData[2]), parseFloat(updatedData[3]), tables));
    stores[stores.length - 1].render();
    populateTotalRow();
  } else {
    stores.push(new Store(updatedData[0], parseInt(updatedData[1]), parseInt(updatedData[2]), parseFloat(updatedData[3]), tables));
    stores[stores.length - 1].render();
    storeTable.deleteRow(-1);
    populateTotalRow();
  }
};

var populateHeadings = function(table, needTotal) {
  heading.textContent = 'Location Name';
  table.appendChild(heading.cloneNode(true));
  for (var i = 0; i < storeClose - storeOpen; i++) {
    heading.textContent = `${(i + storeOpen) < 13 ? i + storeOpen : i - storeOpen}:00${(i + storeOpen) < 12 ? 'am' : 'pm'}`;
    table.appendChild(heading.cloneNode(true));
  }
  if (needTotal) {
    heading.textContent = 'Daily Location Total';
    table.appendChild(heading.cloneNode(true));
  }
};

var populateTotalRow = function() {
  rows.textContent = 'Company Totals';
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
  storeNumbers.textContent = `${hourlyTotals.reduce(function(total, num) {return total + num;})} cookies`;
  totalRow.appendChild(storeNumbers.cloneNode(true));
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

populateTotalRow();

newStoreForm.addEventListener('submit', addNewStore);
updateStoreForm.addEventListener('submit', updateStoreData);