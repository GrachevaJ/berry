const menuToggle = document.querySelector('.nav__menu-toggle');
const menu = document.querySelector('.nav');

menu.classList.remove('nav--nojs');

menuToggle.addEventListener('click', ()=> {
  menu.classList.toggle('nav--opened');
});
