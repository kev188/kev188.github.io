document.addEventListener("DOMContentLoaded", () => {
    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const btnRegresar = document.getElementById("btnRegresar");

    // Validación de nombre (solo letras y espacios)
    nombreInput.addEventListener("input", () => {
        nombreInput.value = nombreInput.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, "");
    });

    // Validación de correo (bloqueo de caracteres inválidos)
    correoInput.addEventListener("input", () => {
        correoInput.value = correoInput.value.replace(/[^a-zA-Z0-9@._-]/g, "");
    });

    // Botón de regreso
    btnRegresar.addEventListener("click", () => {
        window.location.href = "proyecto.html";
    });
});
