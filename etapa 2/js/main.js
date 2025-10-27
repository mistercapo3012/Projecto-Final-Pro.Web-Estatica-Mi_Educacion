// Mostrar pregunta extra en encuesta
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("pregunta1");
    const extra = document.getElementById("preguntaExtra");
    const encuestaForm = document.getElementById("encuestaForm");
    const contactoForm = document.getElementById("contactoForm");

    if (select) {
    select.addEventListener("change", () => {
        if (select.value === "no") extra.style.display = "block";
        else extra.style.display = "none";
    });
    }

  // Validación formulario contacto
    if (contactoForm) {
    contactoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let nombre = document.getElementById("nombre");
        let correo = document.getElementById("correo");
        let mensaje = document.getElementById("mensaje");

        let valido = true;

        [nombre, correo, mensaje].forEach(campo => campo.style.border = "1px solid #ccc");

        if (nombre.value.trim() === "") {
        nombre.style.border = "2px solid red";
        valido = false;
        }

        if (!correo.value.includes("@")) {
        correo.style.border = "2px solid red";
        valido = false;
        }

        if (mensaje.value.length < 10) {
        mensaje.style.border = "2px solid red";
        valido = false;
        }

        if (valido) alert("Formulario enviado correctamente (simulado).");
        else alert("Por favor, revisá los campos marcados en rojo.");
    });
    }
});
