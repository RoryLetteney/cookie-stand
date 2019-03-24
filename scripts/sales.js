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

var regenerateTotalRow = function() {
  storeTable.deleteRow(-1);
  stores[stores.length - 1].render();
  populateTotalRow();
};

var checkCurrentTableRows = function() {
  var currentTableRows = [];
  for (var i = 0; i < tables.length; i++) {
    currentTableRows[i] = Object.values(tables[i].getElementsByTagName('tr'));
  }
  return currentTableRows;
};

var compareFormToCurrentTableData = function (tableData, form) {
  var exists;
  var index;
  var results = [];
  for (var i = 0; i < tableData.length; i++) {
    for (var a = 0; a < tableData[i].length; a++) {
      var currentLocationName = tableData[i][a].innerHTML.substr(0, tableData[i][a].innerHTML.indexOf('<'));
      if (currentLocationName === form[1].value) {
        exists = true;
        index = a;
        break;
      } else {
        exists = false;
      }
    }
  }
  results.push(exists, index);
  return results;
};

var updateTables = function(data) {
  stores.push(new Store(data[0], parseInt(data[1]), parseInt(data[2]), parseFloat(data[3]), tables));
  regenerateTotalRow();
};

var addNewStore = function(e) {
  e.preventDefault();
  var newStoreData = [];
  var currentTableData = checkCurrentTableRows();
  var addCheck = compareFormToCurrentTableData(currentTableData, newStoreFormElements);
  if (!addCheck[0]) {
    newStoreFormElements.forEach(function(element) {
      if (newStoreFormElements.indexOf(element) > 0 && newStoreFormElements.indexOf(element) < newStoreFormElements.length - 1) {
        newStoreData.push(element.value);
      }
    });
    updateTables(newStoreData);
  } else {
    alert('Store location already exists!');
  }
};

var updateStoreData = function(e) {
  e.preventDefault();
  var storeToRender;
  var updatedData = [];
  var currentTableData = checkCurrentTableRows();
  var updateCheck = compareFormToCurrentTableData(currentTableData, updateStoreFormElements);
  updateStoreFormElements.forEach(function(element) {
    if (updateStoreFormElements.indexOf(element) > 0 && updateStoreFormElements.indexOf(element) < updateStoreFormElements.length - 1) {
      updatedData.push(element.value);
    }
  });
  if (updateCheck[0]) {
    tables.forEach(function (table) {
      table.deleteRow(updateCheck[1]);
    });
    stores.splice(storeToRender, 1);
    updateTables(updatedData);
  } else {
    alert('Store location does not currently exist!');
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