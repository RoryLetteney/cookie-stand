var storeOpen = 6;
var storeClose = 20;

var randomNumberOfCustomers = (min, max) => {
  return Math.ceil(Math.random() * (max - (min - 1)) + (min - 1));
};

function Store(name, minCustomers, maxCustomers, avgCookies) {
  this.locationName = name,
  this.minCustomersPerHour = minCustomers,
  this.maxCustomersPerHour = maxCustomers,
  this.avgCookiesPerCustomer = avgCookies,
  this.customersPerHour = [],
  this.cookiesPerHour = [],
  this.totalDailyCookies = 0,
  this.results = [],
  this.calcCustomersPerHour = function() {
    for (var i = 0; i < (storeClose - storeOpen); i++) {
      this.customersPerHour.push(
        randomNumberOfCustomers(
          this.minCustomersPerHour,
          this.maxCustomersPerHour
        )
      );
    }
  },
  this.calcCookiesPerHour = function() {
    for (var i = 0; i < this.customersPerHour.length; i++) {
      this.cookiesPerHour.push(
        Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer)
      );
    }
  },
  this.calcTotalDailyCookies = function() {
    this.cookiesPerHour.forEach(i => {
      this.totalDailyCookies += i;
    });
  },
  this.appendSelf = function() {
    var storeTable = document.getElementById('store-table');
    var rows = document.createElement('tr');
    var storeNumbers = document.createElement('td');
    rows.className = 'row';
    storeNumbers.className = 'store-data';

    rows.textContent = this.locationName;
    var row = storeTable.appendChild(rows.cloneNode(true));
    for (var a = 0; a < this.cookiesPerHour.length; a++) {
      storeNumbers.textContent = this.cookiesPerHour[a];
      row.appendChild(storeNumbers.cloneNode(true));
    }
    storeNumbers.textContent = this.totalDailyCookies;
    row.appendChild(storeNumbers.cloneNode(true));

  },
  this.render = function() {
    this.calcCustomersPerHour();
    this.calcCookiesPerHour();
    this.calcTotalDailyCookies();
    this.results.push(
      this.customersPerHour,
      this.cookiesPerHour,
      this.totalDailyCookies
    );
    this.appendSelf();
  };
}