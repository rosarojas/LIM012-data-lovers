const boton = document.querySelector('#botonMenu');
function mostrarMenu() {
  const menu = document.querySelector('#contenidoMenu');
  if (menu.classList.contains('ocultar-menu')) {
    menu.classList.remove('ocultar-menu');
    menu.classList.add('mostrar-menu');
  } else {
    menu.classList.remove('mostrar-menu');
    menu.classList.add('ocultar-menu');
  }
}
boton.addEventListener('click', mostrarMenu);