'use strict';
const toggle = document.querySelector('.navigation__toggle');
const navEl = document.querySelector('.navigation');

toggle.addEventListener('click', function () {
  if (navEl.classList.contains('navigation--opened')) {
    navEl.classList.remove('navigation--opened');
    navEl.classList.add('navigation--closed');
  } else {
    navEl.classList.add('navigation--opened');
    navEl.classList.remove('navigation--closed');
  }
})
