const formulario = document.getElementById('formulario');
const local = document.getElementById('local');
const domicilio = document.getElementById('domicilio');
const metodoPago = document.getElementById('metodo-pago');
const pagoTarjeta = document.getElementById('pago-tarjeta');

// Mostrar u ocultar campos de tarjeta según el método de pago
metodoPago.addEventListener('change', () => {
    if (metodoPago.value === 'Tarjeta') {
        pagoTarjeta.style.display = 'block';
    } else {
        pagoTarjeta.style.display = 'none';
    }
});

// Lógica para el botón "Pedido Local"
local.addEventListener('click', (e) => {
    e.preventDefault();

    // Limpiar datos antiguos de local
    localStorage.removeItem('local-pizza1');
    localStorage.removeItem('local-pizza2');
    localStorage.removeItem('local-pizza3');
    localStorage.removeItem('local-refresco');
    localStorage.removeItem('local-papas');
    localStorage.removeItem('local-postre');
    localStorage.removeItem('local-ensalada');
    localStorage.removeItem('local-metodoPago');
    localStorage.removeItem('local-total');

    // Obtener las pizzas seleccionadas
    const pizza1 = document.getElementById('pizza1').value;
    const pizza2 = document.getElementById('pizza2').value;
    const pizza3 = document.getElementById('pizza3').value;

    // Obtener los precios de las pizzas
    const preciosPizzas = {
        'Nada': 0,
        'Mexicana': 100,
        'Pepperoni': 120,
        'Hawaiana': 110
    };

    // Sumar precios de las pizzas
    let total = preciosPizzas[pizza1] + preciosPizzas[pizza2] + preciosPizzas[pizza3];

    // Obtener los complementos seleccionados
    const refresco = document.getElementById('refresco').checked;
    const papas = document.getElementById('papas').checked;
    const postre = document.getElementById('postre').checked;
    const ensalada = document.getElementById('ensalada').checked;

    // Sumar precios de los complementos
    if (refresco) total += 30;
    if (papas) total += 45;
    if (postre) total += 55;
    if (ensalada) total += 35;

    // Obtener el método de pago y validar campos de tarjeta si es necesario
    const metodo = metodoPago.value;
    if (metodo === 'Tarjeta') {
        const numTarjeta = document.getElementById('num-tarjeta').value;
        const fechaExp = document.getElementById('fecha-exp').value;
        const cvv = document.getElementById('cvv').value;

        const tarjetaValida = /^\d{16}$/.test(numTarjeta);
        const fechaValida = /^\d{2}\/\d{2}$/.test(fechaExp);
        const cvvValido = /^\d{3}$/.test(cvv);

        if (!tarjetaValida || !fechaValida || !cvvValido) {
            alert('Por favor, ingresa correctamente los datos de la tarjeta.');
            return;
        }
    }

    // Guardar datos en localStorage
    localStorage.setItem('local-pizza1', `${pizza1} ($${preciosPizzas[pizza1]})`);
    localStorage.setItem('local-pizza2', `${pizza2} ($${preciosPizzas[pizza2]})`);
    localStorage.setItem('local-pizza3', `${pizza3} ($${preciosPizzas[pizza3]})`);
    localStorage.setItem('local-refresco', refresco);
    localStorage.setItem('local-papas', papas);
    localStorage.setItem('local-postre', postre);
    localStorage.setItem('local-ensalada', ensalada);
    localStorage.setItem('local-metodoPago', metodo);
    localStorage.setItem('local-total', total);

    // Redirigir al ticket-local.html
    window.location.href = 'ticket-local.html';
});

// Lógica para el botón "Pedido a Domicilio"
domicilio.addEventListener('click', (e) => {
    e.preventDefault();

    // Limpiar datos antiguos de domicilio
    localStorage.removeItem('domicilio-pizza1');
    localStorage.removeItem('domicilio-pizza2');
    localStorage.removeItem('domicilio-pizza3');
    localStorage.removeItem('domicilio-refresco');
    localStorage.removeItem('domicilio-papas');
    localStorage.removeItem('domicilio-postre');
    localStorage.removeItem('domicilio-ensalada');
    localStorage.removeItem('domicilio-metodoPago');
    localStorage.removeItem('domicilio-total'); // Limpiar el total anterior

    // Obtener las pizzas seleccionadas
    const pizza1 = document.getElementById('pizza1').value;
    const pizza2 = document.getElementById('pizza2').value;
    const pizza3 = document.getElementById('pizza3').value;

    // Obtener los precios de las pizzas
    const preciosPizzas = {
        'Nada': 0,
        'Mexicana': 100,
        'Pepperoni': 120,
        'Hawaiana': 110
    };

    // Sumar precios de las pizzas
    let total = preciosPizzas[pizza1] + preciosPizzas[pizza2] + preciosPizzas[pizza3];

    // Obtener los complementos seleccionados
    const refresco = document.getElementById('refresco').checked;
    const papas = document.getElementById('papas').checked;
    const postre = document.getElementById('postre').checked;
    const ensalada = document.getElementById('ensalada').checked;

    // Sumar precios de los complementos
    if (refresco) total += 30;
    if (papas) total += 45;
    if (postre) total += 55;
    if (ensalada) total += 35;

    // Obtener el método de pago
    const metodo = metodoPago.value;

    // Guardar datos en localStorage
    localStorage.setItem('domicilio-pizza1',`${pizza1} ($${preciosPizzas[pizza1]})`);
    localStorage.setItem('domicilio-pizza2', `${pizza2} ($${preciosPizzas[pizza2]})`);
    localStorage.setItem('domicilio-pizza3', `${pizza3} ($${preciosPizzas[pizza3]})`);
    localStorage.setItem('domicilio-refresco', refresco);
    localStorage.setItem('domicilio-papas', papas);
    localStorage.setItem('domicilio-postre', postre);
    localStorage.setItem('domicilio-ensalada', ensalada);
    localStorage.setItem('domicilio-metodoPago', metodo);
    localStorage.setItem('domicilio-total', total); // Guardar el total

    // Redirigir a la página de domicilio
    window.location.href = 'pagina-domicilio.html';
});