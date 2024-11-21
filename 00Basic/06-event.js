const message = document.querySelector(".message");
const click = document.querySelector(".click");
const enter = document.querySelector(".enter");
const leave = document.querySelector(".leave");
const inputText = document.querySelector(".input input");
const change = document.querySelector(".change select");
const submit = document.querySelector(".submit");
const submitID = document.querySelector(".submit .id");
const submitNickname = document.querySelector(".submit .nickname");
const target = document.querySelector(".target .parent");

const log = function (text) {
  const div = document.createElement("div");
  div.innerHTML = text;

  message.appendChild(div);
  message.scrollTop = message.scrollHeight;
};

click.addEventListener("click", function () {
  log("click");
});

enter.addEventListener("mouseenter", function () {
  log("mouseenter");
});

leave.addEventListener("mouseleave", function () {
  log("mouseleave");
});

// 실시간으로 압력된 텍스트 감지 input 계열에 사용 - 실시간 자수파악할때 사용
inputText.addEventListener("input", function (e) {
  log(e.target.value);
});

// 데이터가 바뀔떄 - 셀렉트박스
change.addEventListener("change", function (e) {
  log(e.target.value);
});

// form 태그 안에 버튼을 주면 자동으로 submit 이벤트 들어가짐.
submit.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = submitID.value;
  const nickname = submitNickname.value;

  if (id === "" || nickname === "") {
    log("아이디 또는 닉네임을 입력하세요.");
    return;
  }

  log("아이디:" + id + " / 닉네임:" + nickname);
});

// 링크는 새로고침 일으니키 새로고침 막아줌
document.querySelector(".link").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("링크가 클릭되었습니다");
});

// 타겟은 자손을 포함해 타겟이되어 이벤트가 다됨.
// 해당부분만 타겟하고 싶으면 currentTarget.
//  그냥 선택자를 확실히 잡는게 좋음
target.addEventListener("click", function (e) {
  e.preventDefault();

  const isTarget = e.target.id;
  const isCurrentTarget = e.currentTarget.id;

  log(isTarget);
  // log(isCurrentTarget);
});
