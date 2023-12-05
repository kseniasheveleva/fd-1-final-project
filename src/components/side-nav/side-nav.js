import './side-nav.scss';

const sideNavTrigger = document.querySelector('.side-nav-trigger');
const sideNav = document.querySelector('.side-nav');
const overlay = document.querySelector('.side-nav__overlay');

const KEYBOARD_KEY = {
    escape: 'Escape'
}

const toggleSideNav = (evt) => {
    evt.preventDefault();
    sideNav.classList.toggle('side-nav--active')
}

const closeSideNav = (evt) => {
    if (evt.code === KEYBOARD_KEY.escape || !evt.code) {
        sideNav.classList.remove('side-nav--active')
    }
}


sideNavTrigger.addEventListener('click', toggleSideNav);
overlay.addEventListener('click', closeSideNav);
KEYBOARD_KEY.addEventListener('keydown', closeSideNav);
