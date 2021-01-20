const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const header__menu = document.querySelector('.header__menu');

btnHamburger.addEventListener('click', () => {
  console.log('open');

  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    header__menu.classList.add('has-fade');
  } else {
    body.classList.add('noscroll');
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    header__menu.classList.remove('has-fade');
  }
});
