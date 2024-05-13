function animar() {
    const MenuMb = document.getElementById('menu-mobile')
    const btn = document.getElementById('btn-menu')

    MenuMb.addEventListener('click', animar)

    MenuMb.classList.toggle('abrir')
    btn.classList.toggle('ativar')
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.getElementById('loading-screen').style.display = 'none';
    }, 500);
  });