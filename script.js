// HAMBURGER MENU

const menuWhole = document.querySelector('.menu-whole');
const menuIcon = document.querySelector('.fa-bars');
const menuItems = document.querySelectorAll('.menu-whole li');

let toggleMenuDisplay = () => {
    let computedStyle = window.getComputedStyle(menuWhole);
    if (computedStyle.getPropertyValue('display') === 'none') {
        menuWhole.style.display = 'block';
    } else {
        menuWhole.style.display = 'none';
    }
}

menuIcon.addEventListener('click', toggleMenuDisplay);

menuItems.forEach(item => {
    item.addEventListener('click', toggleMenuDisplay);
});

document.addEventListener('click', (event) => {
    if (!menuWhole.contains(event.target) && event.target !== menuIcon) {
        menuWhole.style.display = 'none';
    }
});

// ---------------------------------------------