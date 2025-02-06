(function() {
  const abrir = document.querySelector(".abrirmenu");
  const menu = document.querySelector(".menu");

  // Abrir y cerrar el menú al hacer clic
  abrir.addEventListener("click", function () {
    menu.classList.toggle("aparecer_menu");
  });

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !abrir.contains(event.target)) {
      menu.classList.remove("aparecer_menu");
    }
  });

  const btnContacto = document.querySelector(".icono_principal");
  const caja = document.querySelector(".contactos");
  let contacto = document.querySelector(".contacto");

  // Comportamiento para dispositivos móviles y de escritorio
  if (screen.width < 767) {
    btnContacto.addEventListener("click", function () {
      caja.classList.toggle("aparecer");
    });
    console.log(screen.width);
  } else {
    btnContacto.addEventListener("mouseover", function () {
      caja.classList.add("aparecer");
    });
    btnContacto.addEventListener("click", function () {
      caja.classList.remove("aparecer");
    });
    console.log(screen.width);
  }
})();
