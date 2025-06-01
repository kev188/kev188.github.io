// Recuperar las pizzas seleccionadas desde localStorage
const pizza1 = localStorage.getItem('local-pizza1') || "No seleccionada";
const pizza2 = localStorage.getItem('local-pizza2') || "No seleccionada";
const pizza3 = localStorage.getItem('local-pizza3') || "No seleccionada";

// Recuperar los complementos seleccionados desde localStorage
const refresco = localStorage.getItem('local-refresco') === "true" ? "$30" : "No seleccionado";
const papas = localStorage.getItem('local-papas') === "true" ? "$45" : "No seleccionado";
const postre = localStorage.getItem('local-postre') === "true" ? "$55" : "No seleccionado";
const ensalada = localStorage.getItem('local-ensalada') === "true" ? "$35" : "No seleccionado";

// Recuperar el método de pago desde localStorage
const metodoPago = localStorage.getItem('local-metodoPago') || "No especificado";

// Recuperar el total desde localStorage
const total = localStorage.getItem('local-total') || "0";

// Mostrar las pizzas en el HTML
document.getElementById('local-pizza1').textContent = pizza1;
document.getElementById('local-pizza2').textContent = pizza2;
document.getElementById('local-pizza3').textContent = pizza3;

// Mostrar los complementos en el HTML
document.getElementById('local-refresco').textContent = refresco;
document.getElementById('local-papas').textContent = papas;
document.getElementById('local-postre').textContent = postre;
document.getElementById('local-ensalada').textContent = ensalada;

// Mostrar el método de pago en el HTML
document.getElementById('local-metodoPago').textContent = metodoPago;

// Mostrar el total en el HTML
document.getElementById('local-total').textContent = total;

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

const btnRegresar = document.getElementById("btnRegresar");
// Botón de regreso
    btnRegresar.addEventListener("click", () => {
        window.location.href = "pizzeria.html";
    });