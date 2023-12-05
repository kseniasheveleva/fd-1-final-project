import './dropdown.scss';

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