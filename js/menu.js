const abrir = document.querySelector(".abrirmenu");
const menu = document.querySelector(".menu");

abrir.addEventListener("click", function () {
  menu.classList.toggle("aparecer_menu");
});

const btnContacto = document.querySelector(".icono_principal");
const caja = document.querySelector(".contactos");
let contacto = document.querySelector(".contacto");
btnContacto.addEventListener("click", function () {
  caja.classList.toggle("aparecer");
  contacto.style.display = "none";
});

// const modalInicio = document.querySelector(".modal_inicio");
// const closeModal = document.querySelector(".close");
// window.addEventListener("load", () => {
//   modalInicio.classList.add("aparecer_modal");
// });
// closeModal.addEventListener("click", () => {
//   modalInicio.classList.remove("aparecer_modal");
// });
