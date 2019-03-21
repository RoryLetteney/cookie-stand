'use strict';

(function generateHome() {
  var home = document.getElementById('home');
  var h1 = document.createElement('h1');
  var img = document.createElement('img');
  var about = document.createElement('p');
  var storeInfo = document.createElement('section');
  var hours = document.createElement('section');
  var hoursTitle = document.createElement('h3');
  var dailyHours = document.createElement('p');
  var storeLocations = document.createElement('section');
  var stores = [
    {
      locationName: '1st and Pike',
      address: '1st Ave & Pike St'
    },
    {
      locationName: 'SeaTac Airport',
      address: '17801 International Blvd'
    },
    {
      locationName: 'Seattle Center',
      address: '305 Harrison St'
    },
    {
      locationName: 'Capitol Hill',
      address: '1410 E John St'
    },
    {
      locationName: 'Alki',
      address: '6115 SW Hinds St'
    }
  ];

  h1.className = 'company-name';
  h1.textContent = 'Pat\'s Salmon Cookies';
  img.className = 'fish-picture';
  img.src = 'salmon.png';
  img.alt = 'Picture of a salmon';
  about.className = 'about';
  about.textContent = 'Pat\'s Salmon Cookies is the hot new thing in the Seattle area! We combine two of Seattle\'s favorite things: salmon and cookies. Give us a call at 555-5555 to place your order today!';
  storeInfo.className = 'store-info';
  hours.className = 'store-hours';
  hoursTitle.className = 'store-hours-title';
  hoursTitle.textContent = 'Store Hours';
  dailyHours.className = 'daily-hours';
  dailyHours.textContent = '6am - 8pm daily';
  storeLocations.className = 'store-locations';

  home.appendChild(h1);
  home.appendChild(img);
  home.appendChild(about);
  home.appendChild(storeInfo);
  storeInfo.appendChild(hours);
  hours.appendChild(hoursTitle);
  hours.appendChild(dailyHours);
  storeInfo.appendChild(storeLocations);

  stores.forEach(store => {
    var storeName = document.createElement('h3');
    var storeAddress = document.createElement('p');
    storeName.textContent = store.locationName;
    storeAddress.textContent = store.address;
    storeName.className = 'store-names';
    storeAddress.className = 'store-addresses';
    storeLocations.appendChild(storeName);
    storeLocations.appendChild(storeAddress);
  });

}());