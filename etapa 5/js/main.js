const form = document.getElementById("contactoForm");
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const asuntoInput = document.getElementById("asunto");
const mensajeInput = document.getElementById("mensaje");
const contador = document.getElementById("contador");

mensajeInput.addEventListener("input", () => {
    contador.textContent = mensajeInput.value.length + "/500";
});

// Resaltar rojo al fallar
function marcarError(input) {
    input.classList.add("error");
    input.classList.remove("ok");
}

// Marcar verde si está bien
function marcarOk(input) {
    input.classList.remove("error");
    input.classList.add("ok");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let valido = true;

    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();
    const asunto = asuntoInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    const nombrePalabras = nombre.split(/\s+/);

    // ✅ Validación reforzada del nombre
    if (
        nombre === "" ||
        !nombreRegex.test(nombre) ||
        nombre.length > 50 ||
        nombrePalabras.length < 2 ||                 // Mínimo 2 palabras
        nombrePalabras.length > 4 ||                 // Máximo 4 palabras
        nombrePalabras[0].length < 3 ||              // 1° palabra mínimo 3 letras
        nombrePalabras[1].length < 3                 // 2° palabra mínimo 3 letras
    ) {
        marcarError(nombreInput);
        valido = false;
    } else marcarOk(nombreInput);

    if (!correo.endsWith("@gmail.com")) {
        marcarError(correoInput);
        valido = false;
    } else marcarOk(correoInput);

    const asuntoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    const asuntoPalabras = asunto.split(/\s+/);

    if (asunto === "" || !asuntoRegex.test(asunto) || asunto.length > 50 || asuntoPalabras.length > 10) {
        marcarError(asuntoInput);
        valido = false;
    } else marcarOk(asuntoInput);

    if (mensaje === "" || mensaje.length > 500) {
        marcarError(mensajeInput);
        valido = false;
    } else marcarOk(mensajeInput);

    if (!valido) {
        mostrarMensaje("⚠️ Revisá los campos marcados en rojo.", "error-msg");
        return;
    }

    mostrarMensaje("✅ ¡Mensaje enviado correctamente!", "success-msg");
    form.reset();
    contador.textContent = "0/500";
});

// ✅ Cartel verde o rojo
function mostrarMensaje(texto, clase) {
    const mensajeDiv = document.getElementById("estado");
    mensajeDiv.textContent = texto;
    mensajeDiv.className = clase;
}
