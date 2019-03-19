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
  this.render = function() {
    this.calcCustomersPerHour();
    this.calcCookiesPerHour();
    this.calcTotalDailyCookies();
    this.results.push(
      this.customersPerHour,
      this.cookiesPerHour,
      this.totalDailyCookies
    );
  };
}