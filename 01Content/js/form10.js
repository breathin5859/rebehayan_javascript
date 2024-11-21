const textCount = () => {
  const title = document.querySelector("#txt2_1");
  const titleCount = document.querySelector(".title-count");
  const content = document.querySelector("#txt2_2");
  const contentCount = document.querySelector(".content-count");

  title.addEventListener("input", () => {
    const titleValue = title.value;
    titleCount.textContent = `${titleValue.length}/30`;
  });
  content.addEventListener("input", () => {
    const contentValue = content.value;
    contentCount.textContent = `${contentValue.length}/30`;
  });
};

textCount();
