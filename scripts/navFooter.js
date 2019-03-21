var body = document.body;
var footer = document.createElement('footer');
var img = document.createElement('img');
var images = [
  'chinook.jpg',
  'cutter.jpeg',
  'family.jpg',
  'fish.jpg',
  'frosted-cookie.jpg',
  'shirt.jpg'
];
footer.classList.add('footer');
footer.innerHTML = '2019 &copy; Pat\'s Salmon Cookies';

images.forEach(function(image) {
  img.src = `imgs/${image}`;
  img.className = 'footer-image';
  footer.appendChild(img.cloneNode(true));
});

body.appendChild(footer);