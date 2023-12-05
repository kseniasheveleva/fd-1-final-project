import './dropdown.scss';

const hideAllActiveMenus = (current) => {
    const allItems = document.querySelectorAll('.dropdown__menu--active');
    if (allItems.length) {
        Array.from(allItems).filter((item) => current !== item).forEach((el) => {
            el.classList.remove('dropdown__menu--active')
        })
    }
}

const toggleDropdown = (evt) => {
    const target = evt.target;
    const dropdownElement = target.closest('.dropdown--click');
    const dropdownMenuElement = target.closest('.dropdown__menu');

    if (dropdownElement) {
        const dropdownMenu = dropdownElement.querySelector('.dropdown__menu');
        dropdownMenu.classList.toggle('dropdown__menu--active');
    }

    if (dropdownMenuElement) {
        dropdownMenuElement.classList.remove('dropdown__menu--active');
    }

    if (!dropdownElement) {
        const allItems = document.querySelector('.dropdown__menu--active');
        allItems.forEach((el) => {
            el.classList.remove('dropdown__menu--active')
        })
    }
}

document.addEventListener('click', toggleDropdown)