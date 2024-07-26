document.getElementById('Formulario').addEventListener('submit', function(event) {
    // Evitar el envío del formulario si hay errores
    let isValid = true;

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const mensaje = document.getElementById('textarea').value.trim();

    // Validar Nombre
    if (nombre === '') {
        alert('Por favor, ingrese su nombre completo.');
        isValid = false;
    }

    // Validar Correo Electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        isValid = false;
    }

    // Validar Teléfono
    const telPattern = /^[0-9]{10}$/;
    if (tel === '' || !telPattern.test(tel)) {
        alert('Por favor, ingrese un número de teléfono válido (10 dígitos).');
        isValid = false;
    }

    // Validar Ciudad
    const direcPattern = /^[a-zA-Z]+$/;
    console.log(!direcPattern.test(direccion))
    if (direccion === '' || !ciudPattern.test(direccion)) {
        alert('Por favor, ingrese una direccion.');
        isValid = false;
    }

    // Validar Mensaje
    if (mensaje === '' || mensaje.length > 100) {
        alert('Por favor, ingrese un mensaje con un máximo de 100 caracteres.');
        isValid = false;
    }

    // Si algún campo no es válido, evitar el envío del formulario
    if (!isValid) {
        event.preventDefault();
    }
});