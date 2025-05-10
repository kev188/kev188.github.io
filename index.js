document.addEventListener('DOMContentLoaded', () => {
    // Corrección de los botones para que redirijan correctamente
    const btnPizzeria = document.getElementById('btnPizzeria');
    const btnProyecto = document.getElementById('btnProyecto');

    if (btnPizzeria && btnProyecto) {
        btnPizzeria.addEventListener('click', () => {
            window.location.href = 'pizzeria.html';
        });

        btnProyecto.addEventListener('click', () => {
            window.location.href = 'proyecto.html';
        });
    }
});
