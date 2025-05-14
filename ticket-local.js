// Recuperar las pizzas seleccionadas y sus precios
const pizza1 = localStorage.getItem('local-pizza1') || "No seleccionada";
const pizza2 = localStorage.getItem('local-pizza2') || "No seleccionada";
const pizza3 = localStorage.getItem('local-pizza3') || "No seleccionada";

const precioPizza1 = parseFloat(localStorage.getItem('local-precioPizza1')) || 0;
const precioPizza2 = parseFloat(localStorage.getItem('local-precioPizza2')) || 0;
const precioPizza3 = parseFloat(localStorage.getItem('local-precioPizza3')) || 0;

// Recuperar los complementos seleccionados y sus precios
const refresco = localStorage.getItem('local-refresco') === "true" ? "$30" : "No seleccionado";
const papas = localStorage.getItem('local-papas') === "true" ? "$45" : "No seleccionado";
const postre = localStorage.getItem('local-postre') === "true" ? "$55" : "No seleccionado";
const ensalada = localStorage.getItem('local-ensalada') === "true" ? "$35" : "No seleccionado";

const precioRefresco = refresco === "$30" ? 30 : 0;
const precioPapas = papas === "$45" ? 45 : 0;
const precioPostre = postre === "$55" ? 55 : 0;
const precioEnsalada = ensalada === "$35" ? 35 : 0;

// Recuperar el método de pago desde localStorage
const metodoPago = localStorage.getItem('local-metodoPago') || "No especificado";

// Calcular el total correctamente
const total = precioPizza1 + precioPizza2 + precioPizza3 + precioRefresco + precioPapas + precioPostre + precioEnsalada;

// Mostrar los datos en el HTML
document.getElementById('local-pizza1').textContent = pizza1;
document.getElementById('local-pizza2').textContent = pizza2;
document.getElementById('local-pizza3').textContent = pizza3;

document.getElementById('local-refresco').textContent = refresco;
document.getElementById('local-papas').textContent = papas;
document.getElementById('local-postre').textContent = postre;
document.getElementById('local-ensalada').textContent = ensalada;

document.getElementById('local-metodoPago').textContent = metodoPago;
document.getElementById('local-total').textContent = `$${total}`;

// Capturar el botón de descarga
document.getElementById('descargar-pdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar título al PDF
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text("Ticket de Pedido en Local", 20, 20);

    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');

    // Función para agregar contenido al PDF
    const agregarTexto = (texto, x, y) => {
        doc.text(texto, x, y);
        return y + 10; // Mueve la posición hacia abajo para la siguiente línea
    };

    let y = 40;

    y = agregarTexto(`Pizza 1: ${document.getElementById('local-pizza1').textContent}`, 20, y);
    y = agregarTexto(`Pizza 2: ${document.getElementById('local-pizza2').textContent}`, 20, y);
    y = agregarTexto(`Pizza 3: ${document.getElementById('local-pizza3').textContent}`, 20, y);

    y = agregarTexto("Complementos:", 20, y);
    y = agregarTexto(`Refresco: ${document.getElementById('local-refresco').textContent}`, 30, y);
    y = agregarTexto(`Papas: ${document.getElementById('local-papas').textContent}`, 30, y);
    y = agregarTexto(`Postre: ${document.getElementById('local-postre').textContent}`, 30, y);
    y = agregarTexto(`Ensalada: ${document.getElementById('local-ensalada').textContent}`, 30, y);

    y = agregarTexto(`Método de Pago: ${document.getElementById('local-metodoPago').textContent}`, 20, y);
    y = agregarTexto(`Total a Pagar: $${document.getElementById('local-total').textContent}`, 20, y);

    // Descargar el PDF
    doc.save("ticket-pedido-local.pdf");
});
