// Recuperar datos del domicilio desde localStorage
const nombre = localStorage.getItem('nombre') || "No especificado";
const telefono = localStorage.getItem('telefono') || "No especificado";
const direccion = localStorage.getItem('direccion') || "No especificado";
const calle = localStorage.getItem('calle') || "No especificado";
const colonia = localStorage.getItem('colonia') || "No especificado";
const municipio = localStorage.getItem('municipio') || "No especificado";
const estado = localStorage.getItem('estado') || "No especificado";

// Recuperar las pizzas seleccionadas desde localStorage
const pizza1 = localStorage.getItem('domicilio-pizza1') || "No seleccionada";
const pizza2 = localStorage.getItem('domicilio-pizza2') || "No seleccionada";
const pizza3 = localStorage.getItem('domicilio-pizza3') || "No seleccionada";

// Recuperar los complementos seleccionados desde localStorage
const refresco = localStorage.getItem('domicilio-refresco') === "true" ? "$30" : "No seleccionado";
const papas = localStorage.getItem('domicilio-papas') === "true" ? "$45" : "No seleccionado";
const postre = localStorage.getItem('domicilio-postre') === "true" ? "$55" : "No seleccionado";
const ensalada = localStorage.getItem('domicilio-ensalada') === "true" ? "$35" : "No seleccionado";

// Recuperar el método de pago desde localStorage
const metodoPago = localStorage.getItem('domicilio-metodoPago') || "No especificado";

// Recuperar el total desde localStorage
const total = localStorage.getItem('domicilio-total') || "0";

// Mostrar los datos en el HTML
document.getElementById('domicilio-nombre').textContent = nombre;
document.getElementById('domicilio-telefono').textContent = telefono;
document.getElementById('domicilio-direccion').textContent = direccion;
document.getElementById('domicilio-calle').textContent = calle;
document.getElementById('domicilio-colonia').textContent = colonia;
document.getElementById('domicilio-municipio').textContent = municipio;
document.getElementById('domicilio-estado').textContent = estado;

document.getElementById('domicilio-pizza1').textContent = pizza1;
document.getElementById('domicilio-pizza2').textContent = pizza2;
document.getElementById('domicilio-pizza3').textContent = pizza3;

document.getElementById('domicilio-refresco').textContent = refresco;
document.getElementById('domicilio-papas').textContent = papas;
document.getElementById('domicilio-postre').textContent = postre;
document.getElementById('domicilio-ensalada').textContent = ensalada;

document.getElementById('domicilio-metodoPago').textContent = metodoPago;
document.getElementById('domicilio-total').textContent = `$${total}`;

// Capturar el botón de descarga
document.getElementById('descargar-pdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar título al PDF
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text("Ticket de Pedido a Domicilio", 20, 20);

    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');

    // Función para agregar contenido al PDF
    const agregarTexto = (texto, x, y) => {
        doc.text(texto, x, y);
        return y + 10; // Mueve la posición hacia abajo para la siguiente línea
    };

    let y = 40;

    y = agregarTexto(`Nombre: ${nombre}`, 20, y);
    y = agregarTexto(`Teléfono: ${telefono}`, 20, y);
    y = agregarTexto(`Dirección: ${direccion}`, 20, y);
    y = agregarTexto(`Calle: ${calle}`, 20, y);
    y = agregarTexto(`Colonia: ${colonia}`, 20, y);
    y = agregarTexto(`Municipio: ${municipio}`, 20, y);
    y = agregarTexto(`Estado: ${estado}`, 20, y);

    y = agregarTexto(`Pizza 1: ${pizza1}`, 20, y);
    y = agregarTexto(`Pizza 2: ${pizza2}`, 20, y);
    y = agregarTexto(`Pizza 3: ${pizza3}`, 20, y);

    y = agregarTexto(`Refresco: ${refresco}`, 20, y);
    y = agregarTexto(`Papas: ${papas}`, 20, y);
    y = agregarTexto(`Postre: ${postre}`, 20, y);
    y = agregarTexto(`Ensalada: ${ensalada}`, 20, y);

    y = agregarTexto(`Método de Pago: ${metodoPago}`, 20, y);
    y = agregarTexto(`Total a Pagar: $${total}`, 20, y);

    // Descargar el PDF
    doc.save("ticket-pedido-domicilio.pdf");
});
