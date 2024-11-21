const selectItem = () => {
  const items = document.querySelectorAll(".list-type14 li button");
  const itemsImg = document.querySelectorAll(".list-type14 li  img");
  const selectTitle = document.querySelector(".message h2");
  const selectImg = document.querySelector(".message img");

  items.forEach((item, itemIndex) => {
    item.addEventListener("click", () => {
      const item = items[itemIndex].textContent;
      const itemImg = itemsImg[itemIndex].getAttribute("src");
      // console.log(itemsImg);

      selectTitle.textContent = item;
      selectImg.setAttribute("src", itemImg);
    });
  });
};

selectItem();
