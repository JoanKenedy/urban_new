(function() {
  document.addEventListener("DOMContentLoaded", function() {
      initMenuToggle();
      initContactToggle();
  });

  // Función para abrir y cerrar el menú principal
  function initMenuToggle() {
      const abrir = document.querySelector(".abrirmenu");
      const menu = document.querySelector(".menu");

      if (!abrir || !menu) return;

      abrir.addEventListener("click", function() {
          menu.classList.toggle("aparecer_menu");
      });

      document.addEventListener("click", function(event) {
          if (!menu.contains(event.target) && !abrir.contains(event.target)) {
              menu.classList.remove("aparecer_menu");
          }
      });
  }

  
})();



(function() {
  document.addEventListener("DOMContentLoaded", function() {
      initContactToggle();
  });

  function initContactToggle() {
      const btnContacto = document.querySelector(".icono_principal");
      const caja = document.querySelector(".contactos");

      if (!btnContacto || !caja) return;

      // Solo abrir/cerrar al hacer clic
      btnContacto.addEventListener("click", function(event) {
          event.stopPropagation();
          caja.classList.toggle("aparecer");
      });

      // Cerrar al hacer clic fuera del menú
      document.addEventListener("click", function(event) {
          if (!caja.contains(event.target) && !btnContacto.contains(event.target)) {
              caja.classList.remove("aparecer");
          }
      });
  }
})();
