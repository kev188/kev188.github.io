document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuLateral = document.getElementById('menuLateral');

    menuToggle.addEventListener('click', () => {
        // Alternar la clase que muestra/oculta el menú
        menuLateral.classList.toggle('menu-abierto');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.toggle-btn');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const targetId = boton.getAttribute('data-target');
            const section = document.getElementById(targetId);

            section.style.display = (section.style.display === 'none' || !section.style.display) ? 'block' : 'none';
        });
    });
});