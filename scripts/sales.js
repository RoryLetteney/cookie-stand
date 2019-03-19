'use strict';

var storeOpen = 6;
var storeClose = 20;

var randomNumberOfCustomers = (min, max) => {
  return Math.ceil(Math.random() * (max - (min - 1)) + (min - 1));
};

var generateLists = (storeData) => {
  var sales = document.getElementById('sales');
  var h2 = document.createElement('h2');
  var ul = document.createElement('ul');
  var total = document.createElement('li');
  h2.className = 'store-name';
  h2.textContent = storeData.locationName;
  ul.className = 'store-data';
  total.className = 'store-data-item';
  total.textContent = `Total: ${storeData.totalDailyCookies} cookies`;

  for (var i = 0; i < storeClose - storeOpen; i++) {
    var li = document.createElement('li');
    li.className = 'store-data-item';
    li.textContent = `${(i + storeOpen) < 13 ? i + storeOpen : i - storeOpen}${(i + storeOpen) < 12 ? 'am' : 'pm'}: ${storeData.results[1][i]} cookies`;
    ul.appendChild(li);
  }
  sales.appendChild(h2);
  sales.appendChild(ul);
  ul.appendChild(total);
};

var stores = [
  {
    locationName: '1st and Pike',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerCustomer: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,
    results: [],
    calcCustomersPerHour: function() {
      for (var i = 0; i < (storeClose - storeOpen); i++) {
        this.customersPerHour.push(
          randomNumberOfCustomers(
            this.minCustomersPerHour,
            this.maxCustomersPerHour
          )
        );
      }
    },
    calcCookiesPerHour: function() {
      for (var i = 0; i < this.customersPerHour.length; i++) {
        this.cookiesPerHour.push(
          Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer)
        );
      }
    },
    calcTotalDailyCookies: function() {
      this.cookiesPerHour.forEach(i => {
        this.totalDailyCookies += i;
      });
    },
    render: function() {
      this.calcCustomersPerHour();
      this.calcCookiesPerHour();
      this.calcTotalDailyCookies();
      this.results.push(
        this.customersPerHour,
        this.cookiesPerHour,
        this.totalDailyCookies
      );
    }
  },
  {
    locationName: 'SeaTac Airport',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookiesPerCustomer: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,
    results: [],
    calcCustomersPerHour: function() {
      for (var i = 0; i < (storeClose - storeOpen); i++) {
        this.customersPerHour.push(
          randomNumberOfCustomers(
            this.minCustomersPerHour,
            this.maxCustomersPerHour
          )
        );
      }
    },
    calcCookiesPerHour: function() {
      for (var i = 0; i < this.customersPerHour.length; i++) {
        this.cookiesPerHour.push(
          Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer)
        );
      }
    },
    calcTotalDailyCookies: function() {
      this.cookiesPerHour.forEach(i => {
        this.totalDailyCookies += i;
      });
    },
    render: function() {
      this.calcCustomersPerHour();
      this.calcCookiesPerHour();
      this.calcTotalDailyCookies();
      this.results.push(this.customersPerHour, this.cookiesPerHour, this.totalDailyCookies);
    }
  },
  {
    locationName: 'Seattle Center',
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookiesPerCustomer: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,
    results: [],
    calcCustomersPerHour: function() {
      for (var i = 0; i < (storeClose - storeOpen); i++) {
        this.customersPerHour.push(
          randomNumberOfCustomers(
            this.minCustomersPerHour,
            this.maxCustomersPerHour
          )
        );
      }
    },
    calcCookiesPerHour: function() {
      for (var i = 0; i < this.customersPerHour.length; i++) {
        this.cookiesPerHour.push(
          Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer)
        );
      }
    },
    calcTotalDailyCookies: function() {
      this.cookiesPerHour.forEach(i => {
        this.totalDailyCookies += i;
      });
    },
    render: function() {
      this.calcCustomersPerHour();
      this.calcCookiesPerHour();
      this.calcTotalDailyCookies();
      this.results.push(this.customersPerHour, this.cookiesPerHour, this.totalDailyCookies);
    }
  },
  {
    locationName: 'Capitol Hill',
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookiesPerCustomer: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,
    results: [],
    calcCustomersPerHour: function() {
      for (var i = 0; i < (storeClose - storeOpen); i++) {
        this.customersPerHour.push(
          randomNumberOfCustomers(
            this.minCustomersPerHour,
            this.maxCustomersPerHour
          )
        );
      }
    },
    calcCookiesPerHour: function() {
      for (var i = 0; i < this.customersPerHour.length; i++) {
        this.cookiesPerHour.push(
          Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer)
        );
      }
    },
    calcTotalDailyCookies: function() {
      this.cookiesPerHour.forEach(i => {
        this.totalDailyCookies += i;
      });
    },
    render: function() {
      this.calcCustomersPerHour();
      this.calcCookiesPerHour();
      this.calcTotalDailyCookies();
      this.results.push(this.customersPerHour, this.cookiesPerHour, this.totalDailyCookies);
    }
  },
  {
    locationName: 'Alki',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookiesPerCustomer: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,
    results: [],
    calcCustomersPerHour: function() {
      for (var i = 0; i < (storeClose - storeOpen); i++) {
        this.customersPerHour.push(
          randomNumberOfCustomers(
            this.minCustomersPerHour,
            this.maxCustomersPerHour
          )
        );
      }
    },
    calcCookiesPerHour: function() {
      for (var i = 0; i < this.customersPerHour.length; i++) {
        this.cookiesPerHour.push(
          Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer)
        );
      }
    },
    calcTotalDailyCookies: function() {
      this.cookiesPerHour.forEach(i => {
        this.totalDailyCookies += i;
      });
    },
    render: function() {
      this.calcCustomersPerHour();
      this.calcCookiesPerHour();
      this.calcTotalDailyCookies();
      this.results.push(this.customersPerHour, this.cookiesPerHour, this.totalDailyCookies);
    }
  }
];

stores.forEach(store => {
  store.render();
  generateLists(store);
});