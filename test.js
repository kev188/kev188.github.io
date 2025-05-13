document.addEventListener("DOMContentLoaded", () => {
    const btnFinalizar = document.getElementById("btnFinalizar");
    const btnDescargarPDF = document.getElementById("btnDescargarPDF");
    const btnRegresar = document.getElementById("btnRegresar");

    // Respuestas correctas
    const respuestasCorrectas = {
        q1: "Link", q2: "Pong", q3: "2009", q4: "Bungie",
        q5: "Michael", q6: "Albert Wesker", q7: "PlayStation",
        q8: "Red Dead Redemption", q9: "Fortnite", q10: "Peach"
    };

    // Evento al hacer clic en "Finalizar"
    btnFinalizar.addEventListener("click", () => {
        let resultado = "";
        let correctas = 0;

        Object.keys(respuestasCorrectas).forEach((pregunta, index) => {
            let seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
            let esCorrecto = seleccionada && seleccionada.value === respuestasCorrectas[pregunta];

            resultado += `<li>${index + 1}. ${seleccionada ? seleccionada.value : "No contestada"} ${esCorrecto ? "✔️" : "❌"}</li>`;
            if (esCorrecto) correctas++;
        });

        document.body.innerHTML += `<div class='resultado'>
            <h2>Resultados del Test</h2>
            <p>Respuestas correctas: ${correctas} / 10</p>
            <ul>${resultado}</ul>
        </div>`;
    });

    // Evento al hacer clic en "Descargar PDF"
    btnDescargarPDF.addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFont("helvetica");
        doc.setFontSize(14);
        doc.text("Resultados del Test de Videojuegos", 10, 10);
        doc.setFontSize(12);

        let y = 20;
        Object.keys(respuestasCorrectas).forEach((pregunta, index) => {
            let seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
            let respuesta = seleccionada ? seleccionada.value : "No contestada";
            let esCorrecto = seleccionada && respuesta === respuestasCorrectas[pregunta];
            doc.cell(10, y, 180, 10, `${index + 1}. ${respuesta} ${esCorrecto ? "Bien" : "Mal"}`);
            y += 10;
        });

        doc.save("Resultados_Test_Videojuegos.pdf");
    });

    // Botón de regreso
    btnRegresar.addEventListener("click", () => {
        window.location.href = "proyecto.html";
    });
});

