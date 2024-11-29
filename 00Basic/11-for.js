/* -------------------------------------------------------------------------- */
/*                                     For                                    */
/* -------------------------------------------------------------------------- */

for (let index = 0; index < 10; index++) {
  // console.log(index); //   0~9 까지 반복 (범위지정)
}

// * - for
// 리스트 안에 클래스 넣기
const li = document.querySelectorAll(".list li");
for (let index = 0; index < li.length; index++) {
  // console.log(index); // 총갯수
  // console.log(li[index]); // 요소를 선택하려면
  // li[index].classList.add("item"); // li에 각각 item 클래스 넣음
  li[index].classList.add(`item${index + 1}`); // 각각 다른 숫자 넣으려면 문자보간 통해서 0부터니까 +1
}

// *
//  Break
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // i가 5일 때 반복을 종료
    //  브레이크 안하면 끝까지 감
  }
  // console.log(i);
}

// *
// Continue
for (let i = 9; i > -1; i--) {
  // 9에서 -1씩 감소
  if (i % 2 === 0) {
    //짝수
    continue;
  }
  // console.log(i);
  // 짝수는 2로 나눴을때 0이 되니까 if로 걸러지게 되고 1이 되는 홀수는 로그에 찍힘
}

// for문 사용 - class 넣고 요소생성
const forList = () => {
  const arry = ["item1", "item2", "item3"];
  const ul = document.querySelector(".for");

  for (let index = 0; index < arry.length; index++) {
    const li = document.createElement("li"); //  li 생성
    li.textContent = arry[index]; // li에 텍스트 넣기

    // ul.prepend(li);
    // prepend는 첫번째 자식으로 들어가니까 처음에 들어가고 다음께 또 처음으로 들어가서 역순으로 만들어짐
    ul.append(li); // ul에 li 넣기

    li.classList.add(`ico${index + 1}`); // li에 css class 넣기
    li.style.setProperty("--color", 40 * index); // css hsl 변수 변경
  }
};
forList();
/* -------------------------------------------------------------------------- */
/*                                   For of                                   */
/* -------------------------------------------------------------------------- */
const arr = ["a", "b", "c"];

for (const item of arr) {
  // console.log(item); //a,b,c
}

// Forof - 배열
const forOfList = document.querySelector(".forof");
const proflie = ["이븐한익힘", "이균", "무물코기"];

for (const element of proflie) {
  const li = document.createElement("li");
  li.textContent = element;
  forOfList.append(li);
}

// Forof - 문자
const id = "kimeunjin";
const idList = document.querySelector(".forof2");
for (const item of id) {
  // console.log(item); // id에 담긴 문자 각각 하나씩 쪼개짐
  const li = document.createElement("li");
  li.textContent = item;
  idList.append(li);
}
const lis = document.querySelectorAll(".forof2 li");
lis.forEach((li, index) => {
  li.style.setProperty("--color", index * 50);
  li.style.fontSize = `${index * 5}px`;
});
/* --------------------------------  ------------------------------------------ */
/*                                   For in                                   */
/* -------------------------------------------------------------------------- */
const user = {
  name: "ha",
  age: 81,
  isValid: true,
};

for (const key in user) {
  // console.log(key); // key 이름 조회
  console.log(user[key]); // key 값
}

// 실습
const userinfo = {
  name: "Rebehayan",
  age: 30,
  role: "Admin",
};

const userList = document.querySelector(".forin");
for (const key in userinfo) {
  const li = document.createElement("li");
  li.textContent = userinfo[key];
  li.classList.add(key);
  userList.append(li);
}
