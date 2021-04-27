/*eslint-disable */
import { loadPage } from './onload';
import { renderHomePage } from './homepage';
import { renderContactUs } from './contact-us';
import { renderMenuPage } from './menu';

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const burger = document.querySelector('.hamburger');

burger.addEventListener('click', () => {
  document.querySelector('ul').classList.toggle('active');
  burger.classList.toogle('toggle');
});

tabs.forEach((tab) => tab.addEventListener(
    'click', (
  ) => {
  const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('toggle');
    });
    tab.classList.add('red');
    target.classList.add('active');
  }
));

document.querySelector('.order-now').addEventListener('click', () => {
  document.querySelector(`[data-tab-target='#menu']`).classList.add('red');
});
document.querySelector(`[type='submit']`).addEventListener('click', () => {
  document.querySelector('form').reset();
});
/*eslint-enable */