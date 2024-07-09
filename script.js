const menuWhole = document.querySelector('.menu-whole');

let toggleMenuDisplay = () => {
    if (menuWhole.style.display === 'none') {
        menuWhole.style.display = 'block';
    } else {
        menuWhole.style.display = 'none';
    }
}

document.querySelector('.fa-bars').addEventListener('click', toggleMenuDisplay);
// document.querySelector('section').addEventListener('click', toggleMenuDisplay);
// document.querySelector('a').addEventListener('click', toggleMenuDisplay);