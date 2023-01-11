const modal = document.querySelector('.modal');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');

menu.addEventListener('click', ()=>{
    modal.style.display = 'flex';
})

closeMenu.addEventListener('click', ()=>{
    modal.style.display = 'none';
})