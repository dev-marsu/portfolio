function animar() {
    const MenuMb = document.getElementById('menu-mobile')
    const btn = document.getElementById('btn-menu')

    MenuMb.addEventListener('click', animar)
    
    MenuMb.classList.toggle('abrir')
    btn.classList.toggle('ativo')
}