document.getElementById("contactoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === "" || correo === "" || asunto === "" || mensaje === "") {
        alert("⚠️ Por favor completa todos los campos.");
        return;
    }

    // Validar correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(correo)) {
        alert("❌ Correo electrónico inválido.");
        return;
    }

    if(mensaje.length > 2250) {
        alert("⚠️ El mensaje no puede superar los 2250 caracteres.");
        return;
    }

    alert("✅ Mensaje enviado correctamente. ¡Gracias por contactarnos!");

    this.reset();
});
