/* -------------------------------------------------------------------------- */
/*                                   Return                                   */
/* -------------------------------------------------------------------------- */

/* ----------------------------- return을 사용하는 경우 ---------------------------- */
// 결과값을 반환해야 할 때
const sum = () => {
  const button = document.querySelector(".sum button");
  const resultValue = document.querySelector(".sum p");
  const number1 = document.querySelector(".sum .number1");
  const number2 = document.querySelector(".sum .number2");

  const result = () => {
    // input 자체가 string - type이 number 여도 string으로 뜸
    // 그래서 내장함수 넘버로 감싸 숫자로 만듦
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    // console.log();
    return num1 + num2; // return 으로 result에 담음

    // resultValue.textContent = num1 + num2;
    // 결과를 안에서 할경우는 괜찮음 
    // 허나 밖에서 결과를 받을땐 return 필요 // return을 안하면 순차적으로 실행했고 끝남.
  };

  // 버튼을 클릭하면 함수가 실행
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const sum = result(); // 위의 sum이랑 이름이 같아도. 클릭 안에서만 하는거라 괜찮음.
    // 함수안의 결과를 함수밖으로 빼려면 return으로 빼고 받을때 변수로 받아야함.
    // 변수로 받는 이유는 데이터는 변수로 저장해야 데이터 관리 측면에서 유리함

    resultValue.textContent = sum; // 버튼 클릭 안에 sum 담겨 보여짐
  });
};
sum();

// 조건에 따라 함수 실행을 종료해야 할 때
const message = () => {
  const button = document.querySelector(".message button");
  const input = document.querySelector(".message input");
  const output = document.querySelector(".message p");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    // 인풋 비어있는경우 - 유효성검사
    if (input.value === "") {
      console.log("첫번째 실행");
      output.textContent = "메세지 입력하라우";
      return; // 통과될때까지 계속실행(조건에 만족하기 때문에 조건문이 계속 실행)
    }
    console.log("두번째 실행");
    output.textContent = input.value;
  });
};
message();

/* ------------------------- return을 사용하지 않아도 되는 경우 ------------------------- */
// 이벤트 핸들러 함수를 사용할 때
const myName = () => {
  const button = document.querySelector(".event button");
  const input = document.querySelector(".event input");
};
myName();

// 상태변경할 때
const title = () => {
  const heading = document.querySelector(".change-title");
};
title();

// 콘솔에 로그 출력할 때
const consoleCheck = () => {
  //   console.log(`콘솔메세지 :`);
};
consoleCheck();

// DOM을 조작할 때
const listDOM = () => {
  const lis = document.querySelectorAll(".list li");
};
listDOM();

/* -------------------------------------------------------------------------- */
/*                                    호이스팅                                 */
/* -------------------------------------------------------------------------- */
//
// const init = () => {
//   // hellow();
// };

// hellow();

// function hellow() {
//   console.log("text");
// }

// 이름이 있는 함수는 호아스팅 발생, 호이스팅 발생 안시키려면 기명함수 아닌 익명힘수.
const hellow = () => {
  console.log("text");
};
hellow();

/* -------------------------------------------------------------------------- */
/*                                   호출 스케줄링                              */
/* -------------------------------------------------------------------------- */
/* ------------------------------ setTimeout ----------------------------- */
function showNotification(message) {
  const dialog = document.querySelector("dialog");
  dialog.innerHTML = message;
  // setTimeout(함수,시간)
  const time = setTimeout(() => {
    dialog.close();
    console.log("팝업닫음");
  }, 2000);
  return time;
}

// 알림 호출
const isTime = showNotification("알람입니다");

let seconds = 0;
/* ------------------------------- setInterval ------------------------------ */
const updateTimer = () => {
  const timmer = document.querySelector("#timer");
  timmer.innerText = `Timer : ${seconds++}초`;
};

// 1초마다 타이머 업데이트
// setInterval(함수, 반복시간); // 함수 외부에서 로드
const stopTime = setInterval(updateTimer, 1000);

/* ------------------------------ clearTimeout ------------------------------ */
const btnStopToast = document.querySelector(".stop-toast");
btnStopToast.addEventListener("click", () => {
  // clearTimeout(정지시키고싶은 함수)
  clearTimeout(isTime);
});

/* ------------------------------ clearInterval ----------------------------- */
const btnStopTimer = document.querySelector(".stop-timer");
btnStopTimer.addEventListener("click", () => {
  clearInterval(stopTime);
});

// clearTimeout / clearInterval - 둘다 멈추는것. 멈출애만 넣어주면 됨
