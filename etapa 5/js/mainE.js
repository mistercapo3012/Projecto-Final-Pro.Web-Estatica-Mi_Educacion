document.getElementById("encuestaForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const selects = this.querySelectorAll("select");

    for (let s of selects) {
        if (s.value === "") {
            alert("Por favor respondé todas las preguntas.");
            return;
        }
    }

    alert("Gracias por responder la encuesta");

    this.reset();
});
