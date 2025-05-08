// Función para mostrar y ocultar la información
document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", function() {
        let targetSection = document.getElementById(this.getAttribute("data-target"));
        
        if (targetSection.style.display === "none" || targetSection.style.display === "") {
            targetSection.style.display = "block";
        } else {
            targetSection.style.display = "none";
        }
    });
});

// Botón de regreso al inicio
document.getElementById("btnRegresar").addEventListener("click", function() {
    window.location.href = "proyecto.html";
});