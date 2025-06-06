document.addEventListener("DOMContentLoaded", () => {
    const btnFinalizar = document.getElementById("btnFinalizar");
    const btnDescargarPDF = document.getElementById("btnDescargarPDF");
    const btnRegresar = document.getElementById("btnRegresar");
    const modal = document.getElementById("modalResultado");
    const cerrarModal = document.querySelector(".cerrar");
    const resultadoTest = document.getElementById("resultadoTest");

    const respuestasCorrectas = {
        q1: "Link", q2: "Pong", q3: "2009", q4: "Bungie",
        q5: "Michael", q6: "Albert Wesker", q7: "PlayStation",
        q8: "Red Dead Redemption", q9: "Fortnite", q10: "Peach"
    };

    btnFinalizar.addEventListener("click", () => {
        let resultado = "";
        let correctas = 0;

        Object.keys(respuestasCorrectas).forEach((pregunta, index) => {
            let seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
            let respuesta = seleccionada ? seleccionada.value : "No contestada";
            let esCorrecto = respuesta === respuestasCorrectas[pregunta];

            resultado += `<p>${index + 1}. ${respuesta} ${esCorrecto ? "✔️" : "❌"}</p>`;
            if (esCorrecto) correctas++;
        });

        resultadoTest.innerHTML = `<h3>Respuestas correctas: ${correctas} / 10</h3>${resultado}`;
        modal.style.display = "flex";
    });

    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    btnDescargarPDF.addEventListener("click", () => {
        if (!window.jspdf) {
            alert("Error: La biblioteca jsPDF no está disponible.");
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFont("helvetica");
        doc.setFontSize(16);
        doc.text("Resultados del Test de Videojuegos", 10, 10);

        let y = 30;
        Object.keys(respuestasCorrectas).forEach((pregunta, index) => {
            let seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
            let respuesta = seleccionada ? seleccionada.value : "No contestada";
            let esCorrecto = respuesta === respuestasCorrectas[pregunta];
            doc.text(`${index + 1}. ${respuesta} ${esCorrecto ? "✔️" : "❌"}`, 10, y);
            y += 10;
        });

        doc.save("Resultados_Test_Videojuegos.pdf");
    });

    btnRegresar.addEventListener("click", () => {
        window.location.href = "proyecto.html";
    });
});
