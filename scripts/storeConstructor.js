var storeOpen = 6;
var storeClose = 20;

var randomNumberOfCustomers = (min, max) => {
  return Math.ceil(Math.random() * (max - (min - 1)) + (min - 1));
};

function Store(name, minCustomers, maxCustomers, avgCookies, tables) {
  this.locationName = name,
  this.minCustomersPerHour = minCustomers,
  this.maxCustomersPerHour = maxCustomers,
  this.avgCookiesPerCustomer = avgCookies,
  this.customersPerHour = [],
  this.cookiesPerHour = [],
  this.totalDailyCookies = 0,
  this.staffEfficiency = 20,
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
  this.appendSelf = function(tables) {
    for (var i = 0; i < tables.length; i++) {
      var rows = document.createElement('tr');
      var storeNumbers = document.createElement('td');
      rows.className = 'row';
      storeNumbers.className = 'store-data';

      if (tables[i] === document.getElementById('store-table')) {
        rows.textContent = this.locationName;
        storeNumbers.className += ' store-data-cookies';
        var storeRow = tables[i].appendChild(rows.cloneNode(true));
        for (var a = 0; a < this.cookiesPerHour.length; a++) {
          storeNumbers.textContent = this.cookiesPerHour[a];
          storeRow.appendChild(storeNumbers.cloneNode(true));
        }
        storeNumbers.textContent = this.totalDailyCookies;
        storeRow.appendChild(storeNumbers.cloneNode(true));
      } else if (tables[i] === document.getElementById('staff-table')) {
        rows.textContent = this.locationName;
        storeNumbers.className += ' store-data-staff';
        var staffRow = tables[i].appendChild(rows.cloneNode(true));
        for (var a = 0; a < this.customersPerHour.length; a++) {
          storeNumbers.textContent = `${Math.ceil(this.customersPerHour[a] / this.staffEfficiency) >= 2 ? Math.ceil(this.customersPerHour[a] / this.staffEfficiency) : 2} staff`;
          staffRow.appendChild(storeNumbers.cloneNode(true));
        }
      }
    }
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
    this.appendSelf(tables);
  };
}