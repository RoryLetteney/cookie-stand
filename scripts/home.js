'use strict';

(function generateHome() {
  var home = document.getElementById('home');
  var h1 = document.createElement('h1');
  var img = document.createElement('img');

  h1.className = 'company-name';
  h1.textContent = 'Pat\'s Salmon Cookies';
  img.className = 'fish-picture';
  img.src = 'salmon.png';
  img.alt = 'Picture of a salmon';

  home.appendChild(h1);
  home.appendChild(img);
}());