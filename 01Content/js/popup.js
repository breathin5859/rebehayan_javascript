// 팝업 - 내가 과제한거
const dialog = () => {
  const btnOpens = document.querySelectorAll(".btn-open");
  const btnCloses = document.querySelectorAll(".btn-close");
  const popup = document.querySelectorAll(".btn-open + .popup");

  btnOpens.forEach((btnOpen, index) => {
    btnOpen.addEventListener("click", () => {
      popup[index].showModal();
    });
  });

  btnCloses.forEach((btnClose, index) => {
    btnClose.addEventListener("click", () => {
      popup[index].close();
    });
  });
};

dialog();
