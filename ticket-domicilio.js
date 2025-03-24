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
const total = parseFloat(localStorage.getItem('domicilio-total')) || 0;

// Función para asignar valores al DOM
const asignarValor = (id, valor) => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.textContent = valor;
};

// Asignar valores al DOM
asignarValor('domicilio-nombre', nombre);
asignarValor('domicilio-telefono', telefono);
asignarValor('domicilio-direccion', direccion);
asignarValor('domicilio-calle', calle);
asignarValor('domicilio-colonia', colonia);
asignarValor('domicilio-municipio', municipio);
asignarValor('domicilio-estado', estado);

asignarValor('domicilio-pizza1', pizza1);
asignarValor('domicilio-pizza2', pizza2);
asignarValor('domicilio-pizza3', pizza3);

asignarValor('domicilio-refresco', refresco);
asignarValor('domicilio-papas', papas);
asignarValor('domicilio-postre', postre);
asignarValor('domicilio-ensalada', ensalada);

asignarValor('domicilio-metodoPago', metodoPago);
asignarValor('domicilio-total', `$${total.toFixed(2)}`);
