const gridItems = document.querySelectorAll('.grid-item');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.gridbutton');

//animation start og stop

gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered');
    });
});

//åbne modal



