export const Title = () => {
  const title = document.querySelector("title");
  const h1 = document.querySelector("h1").innerText;
  title.innerText = h1;
};
