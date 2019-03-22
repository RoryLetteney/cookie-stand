'use strict';
var styleButtons = document.getElementsByClassName('style-button');
var skews = document.getElementsByClassName('skew');

var styleFunctions = [
    function normalStyle() {
        document.body.classList.remove('different-style');
        for (var i = 0; i < skews.length; i++) {
            skews[i].classList.remove('different-style');
        }
    },
    function differentStyle() {
        document.body.classList.add('different-style');
        for (var i = 0; i < skews.length; i++) {
            skews[i].classList.add('different-style');
        }
    }
];

for (var i = 0; i < styleButtons.length; i++) {
    styleButtons[i].addEventListener('click', styleFunctions[i]);
}