'use strict';

(function generateHome() {
  var home = document.getElementById('home');
  var h1 = document.createElement('h1');
  var img = document.createElement('img');
  var about = document.createElement('p');
  var hours = document.createElement('ul');
  var hoursTitle = document.createElement('h3');
  var storeLocations = document.createElement('section');
  var storeNames = document.createElement('h3');
  var storeAddresses = document.createElement('p');

  h1.className = 'company-name';
  h1.textContent = 'Pat\'s Salmon Cookies';
  img.className = 'fish-picture';
  img.src = 'salmon.png';
  img.alt = 'Picture of a salmon';
  about.className = 'about';
  hours.className = 'store-hours';
  hoursTitle.className = 'store-hours-title';
  storeLocations.className = 'store-locations';
  storeNames.className = 'store-names';
  storeAddresses.className = 'store-addresses';


  home.appendChild(h1);
  home.appendChild(img);
}());