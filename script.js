const gridItems = document.querySelectorAll('.grid-item');
const modals = [...document.querySelectorAll('.modal')];
const closeButtons = document.querySelectorAll('.close');
const gridButtons = document.querySelectorAll('.gridbutton');

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
gridButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const currentModal = modals[index];
        if(currentModal) {
            currentModal.style.display ='block';
        }
    });
});

//lukke modal
closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const currentModal = modals[index];
        if(currentModal) {
            currentModal.style.display ='none';
        }
    })
});






