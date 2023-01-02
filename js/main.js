// Menu
const menu = document.querySelector(".navbar__links")
const menuButton = document.querySelector(".navbar__icons")
const overplay = document.querySelector("#overplay")

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('navbar__open');
    menuButton.classList.toggle('open');
    overplay.classList.toggle('show');
})

overplay.addEventListener('click', ()=> {
    menu.classList.toggle('navbar__open');
    menuButton.classList.toggle('open');
    overplay.classList.toggle('show');
})





