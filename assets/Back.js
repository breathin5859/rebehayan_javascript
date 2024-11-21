export const Back = () => {
  const body = document.body;
  const button = document.createElement("button");
  button.innerText = "Back";
  button.classList.add("btn-back");

  body.append(button);

  if (window.location.pathname === "/") {
    button.remove();
  }

  button.addEventListener("click", () => {
    window.history.back();
  });
};
