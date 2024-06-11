addEventListener("DOMContentLoaded", () => {
  const anio = document.getElementById("anio");
  const year = new Date().getFullYear();

  anio.innerText = year;
});
