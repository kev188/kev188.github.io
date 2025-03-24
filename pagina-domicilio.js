const enviar = document.getElementById('enviar');
const confirmacion = document.getElementById('confirmacion');

enviar.addEventListener('click', (e) => {
    e.preventDefault();

    // Obtener la hora actual
    const ahora = new Date();
    const horas = ahora.getHours();

    // Verificar si la hora está entre las 9:00 AM y las 9:00 PM
    if (horas >= 9 && horas < 21) {
        const nombre = document.getElementById('domicilio-nombre').value;
        const telefono = document.getElementById('domicilio-telefono').value;
        const direccion = document.getElementById('domicilio-direccion').value;
        const calle = document.getElementById('domicilio-calle').value;
        const colonia = document.getElementById('domicilio-colonia').value;
        const municipio = document.getElementById('domicilio-municipio').value;
        const estado = document.getElementById('domicilio-estado').value;

        // Verificar los campos requeridos
        if (nombre && telefono && direccion && calle && colonia && municipio && estado) {
            // Validar el teléfono
            const telefonoValido = /^\d{10}$/.test(telefono); // Números de 10 dígitos
            if (!telefonoValido) {
                confirmacion.textContent = 'Por favor, ingresa un número de teléfono válido.';
                confirmacion.style.color = 'red';
                return;
            }

            // Limpiar datos antiguos antes de guardar nuevos
            localStorage.removeItem('domicilio-nombre');
            localStorage.removeItem('domicilio-telefono');
            localStorage.removeItem('domicilio-direccion');
            localStorage.removeItem('domicilio-calle');
            localStorage.removeItem('domicilio-colonia');
            localStorage.removeItem('domicilio-municipio');
            localStorage.removeItem('domicilio-estado');

            // Guardar los datos en localStorage
            localStorage.setItem('domicilio-nombre', nombre);
            localStorage.setItem('domicilio-telefono', telefono);
            localStorage.setItem('domicilio-direccion', direccion);
            localStorage.setItem('domicilio-calle', calle);
            localStorage.setItem('domicilio-colonia', colonia);
            localStorage.setItem('domicilio-municipio', municipio);
            localStorage.setItem('domicilio-estado', estado);

            // Redirigir al ticket-domicilio.html
            window.location.href = 'ticket-domicilio.html';
        } else {
            confirmacion.textContent = 'Por favor, completa toda la información requerida.';
            confirmacion.style.color = 'red'; // Cambiar el color del mensaje a rojo
        }
    } else {
        confirmacion.textContent = 'Gracias por su preferencia, lo esperamos en horario laboral (9:00 AM - 9:00 PM).';
        confirmacion.style.color = 'red'; // Cambiar el color del mensaje a rojo
    }
});

