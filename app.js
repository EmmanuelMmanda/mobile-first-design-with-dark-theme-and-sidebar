// selectors
const hamburgerButton = document.getElementById('hamburger');
const closeButton = document.querySelector('aside .sidebar .close-menu svg')
const sidebarMenu = document.getElementById('aside')
const backdrop = document.querySelector('.backdrop');

const Toggler = document.querySelector('.theme .theme-toggle');
const icon = document.querySelector('.theme .theme-toggle i');

const Body = document.querySelector('body');

//functions
const styled = (state) => {
    sidebarMenu.style.display = state;
}

//event listeners

hamburgerButton.addEventListener('click', () => {
    styled('block')
})

closeButton.addEventListener('click', () => {
    styled('none')

})

backdrop.addEventListener('click', () => {
    styled('none')

})
Toggler.addEventListener('click', () => {
        if (icon.classList.contains('moon')){
          icon.classList.remove('moon')
          icon.classList.remove('bx-moon')
          icon.classList.toggle('bx-sun')
          icon.classList.toggle('sun')
          Body.classList.add('dark')

        }else {
            icon.classList.remove('sun');
          icon.classList.remove('bx-sun');
          icon.classList.toggle('bx-moon');
          icon.classList.toggle('moon');
          Body.classList.remove('dark');
        }
})