// 게시물 갯수

const postCount = () => {
  const items = document.querySelectorAll(".table tbody tr");
  const contentsCount = items.length;
  const count = document.querySelector(".wrapper .count");

  count.textContent = `${contentsCount}개의 게시물`;
};
postCount();
