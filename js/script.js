(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // Seleccionar todos los enlaces
        const allLinks = document.querySelectorAll('a');

        allLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Desplazamiento suave para enlaces internos
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - 55;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    });
})();



(function() {
    document.addEventListener("DOMContentLoaded", function() {
        initBackToTopButton();
    });

    function initBackToTopButton() {
        const backToTopButton = document.getElementById("backToTop");
        if (!backToTopButton) return; // Evita errores si no existe el botón

        // Mostrar u ocultar el botón según el desplazamiento
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        }

        // Evento de scroll
        window.addEventListener("scroll", scrollFunction);

        // Verifica la posición inicial del scroll al cargar la página
        scrollFunction();

        // Evento de clic para volver al inicio con desplazamiento suave
        backToTopButton.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
})();

