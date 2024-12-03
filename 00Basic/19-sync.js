// 동기 - 순차적으로 출력

// 비동기방식
//1
setTimeout(() => {
  console.log("첫번째");
}, 1000);

console.log("두번째 출력");
console.log("세번째 출력");

// 2
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("첫번째 출력");
});

console.log("두번째 출력");

// 3
fetch("https://koreanjson.com/posts/1")
  // fetch 쓰면 .then  // 네크웍상 주소 가져온걸 .than에 넘겨. 받은 결과값을 객체나 배열로 그다음 .than 이또 받음
  .then((response) => response.json()) // json파일을 객체나 배열로 바꿔줌. 아래 똑같은 문법
  // .then((response) => {
  //   return response.json();
  // })  // 위 .than 풀이
  .then((response) => {
    console.log(response);
    console.log("첫번째 출력");
    console.log("두번째 출력");
    console.log("세번째 출력");
  });
