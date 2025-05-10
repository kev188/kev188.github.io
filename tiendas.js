document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector(".carrusel");
    const juegos = document.querySelectorAll(".juego");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const btnRegresar = document.getElementById("btnRegresar");
    
    let index = 0;
    const tiempoCambio = 5000;

    function mostrarJuego() {
        carrusel.style.transform = `translateX(${-index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % juegos.length;
        mostrarJuego();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + juegos.length) % juegos.length;
        mostrarJuego();
    });

    btnRegresar.addEventListener("click", () => {
        window.location.href = "proyecto.html";
    });

    setInterval(() => {
        index = (index + 1) % juegos.length;
        mostrarJuego();
    }, tiempoCambio);

    mostrarJuego();
});
