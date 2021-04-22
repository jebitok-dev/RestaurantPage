import { loadPage } from './controllers/onload';
import { homePage } from './controllers/homepage';
import { contactUs } from './controllers/contactus';

tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');

document.querySelector(`[type='submit']`).addEventListener('click', () => {
    document.querySelector('form').reset();
});