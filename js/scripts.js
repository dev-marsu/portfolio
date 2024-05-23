const MenuDiv = document.getElementById('menu-mobile')
const BtnAnimar = document.getElementById('btn-menu')

MenuDiv.addEventListener('click', animarMenu)

function animarMenu() {
    MenuDiv.classList.toggle('abrir')
    BtnAnimar.classList.toggle('ativar')
}