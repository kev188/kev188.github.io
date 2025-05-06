document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuLateral = document.getElementById('menuLateral');

    menuToggle.addEventListener('click', () => {
        // Alternar la clase que muestra/oculta el menú
        menuLateral.classList.toggle('menu-abierto');
    });
});