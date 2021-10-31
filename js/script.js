const burger = document.querySelector('.navbar-burger');
const navmenu = document.querySelector('.navbar-menu');
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');
const btnClubCoffeeSignup = document.querySelector('.club-signup');
const modal = document.querySelector('.modal');
const modalBackground = document.querySelector('.modal-background');


//burger menu
burger.addEventListener('click', () => {
    navmenu.classList.toggle('is-active')
});

//tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active')

        const target = tab.dataset.target;7
        tabContentBoxes.forEach(box => {
            if(box.getAttribute('id') === target) {
                box.classList.remove('is-hidden')
            } else {
                box.classList.add('is-hidden')
            }
        }); 
    });
});


//modal
btnClubCoffeeSignup.addEventListener('click', () => {
    modal.classList.add('is-active')
});

modalBackground.addEventListener('click', () => {
    modal.classList.remove('is-active');
});
