window.addEventListener('load', function() {
     document.getElementById('loading').style.display = 'none';
});

function animarMenu() {
    const MenuDiv = document.getElementById('menu-mobile')
    const BtnAnimar = document.getElementById('btn-menu')
        
    MenuDiv.addEventListener('click', animarMenu)
    MenuDiv.classList.toggle('abrir')
    BtnAnimar.classList.toggle('ativar')
}