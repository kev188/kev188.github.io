document.addEventListener('DOMContentLoaded', () => {
    const fecha = new Date().toLocaleString();
    document.getElementById('bienvenida').innerText = `¡Bienvenido! Última actualización: ${fecha}`;

    let recargas = parseInt(localStorage.getItem('recargaCount')) || 0;
    const bloqueoTimestamp = localStorage.getItem('bloqueo');

    // Verificar si el usuario aún está bloqueado por 1 minuto
    if (bloqueoTimestamp && Date.now() - bloqueoTimestamp < 60000) {
        bloquearAcceso();
        return; // Detener ejecución para evitar contar recargas mientras está bloqueado
    } else {
        localStorage.removeItem('bloqueo'); // Quitar bloqueo si ya pasó el tiempo
    }

    recargas++;
    localStorage.setItem('recargaCount', recargas);

    const mensajes = [
        "Holaaaaa 👋",
        "Veo que te gusta cargar la página 🤔",
        "Otra vez? 😏",
        "¿Harás esto todo el día? 😠",
        "¿No tienes cosas que hacer? 😡",
        "Me rindo, me voy... 😤"
    ];

    let mensajesMostrados = JSON.parse(localStorage.getItem('mensajesMostrados')) || [];

    if (recargas <= mensajes.length) {
        mensajesMostrados.push(mensajes[recargas - 1]);
        localStorage.setItem('mensajesMostrados', JSON.stringify(mensajesMostrados));
    }

    const mensajesContainer = document.createElement('div');
    mensajesContainer.id = "mensajesContainer";
    document.body.insertBefore(mensajesContainer, document.getElementById('btnPizzeria').parentNode); // Ahora está arriba de los botones

    mensajesMostrados.forEach(texto => {
        let mensajeExtra = document.createElement('p');
        mensajeExtra.innerText = texto;
        mensajesContainer.appendChild(mensajeExtra);
    });

    if (recargas > mensajes.length) {
        bloquearAcceso();
    }

    // **Corrección de los botones para que redirijan correctamente**
    const btnPizzeria = document.getElementById('btnPizzeria');
    const btnProyecto = document.getElementById('btnProyecto');

    if (btnPizzeria && btnProyecto) { // Asegurar que existen antes de asignar eventos
        btnPizzeria.addEventListener('click', () => {
            window.location.href = 'pizzeria.html';
        });

        btnProyecto.addEventListener('click', () => {
            window.location.href = 'proyecto.html';
        });
    }
});

function bloquearAcceso() {
    document.getElementById('bienvenida').innerText = "No podrás acceder por un minuto porque me hiciste enojar 😤⏳";

    const btnPizzeria = document.getElementById('btnPizzeria');
    const btnProyecto = document.getElementById('btnProyecto');

    if (btnPizzeria && btnProyecto) {
        btnPizzeria.disabled = true;
        btnProyecto.disabled = true;
    }

    localStorage.setItem('bloqueo', Date.now());

    setTimeout(() => {
        localStorage.removeItem('bloqueo');
        localStorage.setItem('recargaCount', 0);
        localStorage.removeItem('mensajesMostrados'); // Borrar mensajes después del bloqueo

        if (btnPizzeria && btnProyecto) {
            btnPizzeria.disabled = false;
            btnProyecto.disabled = false;
        }

        location.reload();
    }, 60000);
}

function bloquearSiEstaBloqueado(event) {
    const bloqueoTimestamp = localStorage.getItem('bloqueo');
    if (bloqueoTimestamp && Date.now() - bloqueoTimestamp < 60000) {
        event.preventDefault();
        alert("No podrás acceder por un minuto porque me hiciste enojar 😤⏳");
    }
}