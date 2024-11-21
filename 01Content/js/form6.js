const reset = () => {
  const btnReset = document.querySelector(".btn-reset");
  const checkboxs = document.querySelectorAll('.form6 tbody input[type="checkbox"]');
  btnReset.addEventListener("click", () => {
    checkboxs.forEach((checkbox) => {
      checkbox.removeAttribute("checked");
    });
  });
};
reset();
