let listQuestions = document.querySelectorAll(".btn-dropdown");

listQuestions.forEach((listQuestion) => {
  listQuestion.addEventListener("click", () => {
    let height = 0;
    let menu = listQuestion.nextElementSibling;
    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`;
  });
});
