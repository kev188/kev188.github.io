// Recuperar datos desde localStorage
const datosDomicilio = [
    { id: 'domicilio-nombre', key: 'nombre', label: "Nombre" },
    { id: 'domicilio-telefono', key: 'telefono', label: "Teléfono" },
    { id: 'domicilio-direccion', key: 'direccion', label: "Dirección" },
    { id: 'domicilio-calle', key: 'calle', label: "Calle" },
    { id: 'domicilio-colonia', key: 'colonia', label: "Colonia" },
    { id: 'domicilio-municipio', key: 'municipio', label: "Municipio" },
    { id: 'domicilio-estado', key: 'estado', label: "Estado" }
];

const datosPedido = [
    { id: 'domicilio-pizza1', key: 'domicilio-pizza1', label: "Pizza 1" },
    { id: 'domicilio-pizza2', key: 'domicilio-pizza2', label: "Pizza 2" },
    { id: 'domicilio-pizza3', key: 'domicilio-pizza3', label: "Pizza 3" }
];

const datosComplementos = [
    { id: 'domicilio-refresco', key: 'domicilio-refresco', label: "Refresco", precio: "$30" },
    { id: 'domicilio-papas', key: 'domicilio-papas', label: "Papas", precio: "$45" },
    { id: 'domicilio-postre', key: 'domicilio-postre', label: "Postre", precio: "$55" },
    { id: 'domicilio-ensalada', key: 'domicilio-ensalada', label: "Ensalada", precio: "$35" }
];

const datosPago = [
    { id: 'domicilio-metodoPago', key: 'domicilio-metodoPago', label: "Método de Pago" },
    { id: 'domicilio-total', key: 'domicilio-total', label: "Total a Pagar", prefix: "$" }
];

// Función para mostrar datos en la página
const mostrarDatos = (datos) => {
    datos.forEach(el => {
        const valor = localStorage.getItem(el.key) || "No especificado";
        document.getElementById(el.id).textContent = el.precio && valor === "true" ? el.precio : (el.prefix ? `${el.prefix}${valor}` : valor);
    });
};

// Mostrar datos en la página
mostrarDatos(datosDomicilio);
mostrarDatos(datosPedido);
mostrarDatos(datosComplementos);
mostrarDatos(datosPago);

// Capturar el botón de descarga y generar el PDF
document.getElementById('descargar-pdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text("Ticket de Pedido a Domicilio", 20, 20);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');

    let y = 40;
    
    const agregarTexto = (datos) => {
        datos.forEach(el => {
            const valor = document.getElementById(el.id).textContent || "No especificado";
            doc.text(`${el.label}: ${valor}`, 20, y);
            y += 10;
        });
    };

    agregarTexto(datosDomicilio);
    y += 5;
    doc.text("Pedido", 20, y);
    y += 10;
    agregarTexto(datosPedido);
    y += 5;
    doc.text("Complementos", 20, y);
    y += 10;
    agregarTexto(datosComplementos);
    y += 5;
    agregarTexto(datosPago);

    doc.save("ticket-pedido-domicilio.pdf");
});

// Botón de regreso
document.getElementById('btnRegresar').addEventListener('click', () => {
    window.history.back();
});
