const abrir = document.querySelector(".abrirmenu");
const menu = document.querySelector(".menu");

abrir.addEventListener("click", function () {
  menu.classList.toggle("aparecer_menu");
});

const btnContacto = document.querySelector(".icono_principal");
const caja = document.querySelector(".contactos");
let contacto = document.querySelector(".contacto");

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
