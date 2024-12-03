// document.querySelector // 이걸 함수화 시켜서 받을거임

// const el = (선택자) => {
//   document.querySelector(선택자);
// };

export const el = (selector) => {

  //  문자형 검사(문자열과 빈값)
  // 셀렉터가 없거나 셀렉터 타입이 스트링(문자)가 아닐경우
  if (!selector || typeof selector !== "string") {
    console.warn("선택자가 비어있거나 문자 데이터가 아님"); // 리턴 시키기 위한 경고 error는 진짜 에러일떄
    return;
  }
  const element = document.querySelector(selector); // 중간에 있는 이유는 위에서 검사하고

  // 돔 검사
  if (!element) {
    console.warn(`현재 ${selector}는 페이지에 없슴`);
    return;
  }
  // console.log(element); // 둘다 확인 했으니 리턴시켜줌
  return element;
};

// *
export const els = (selector) => {
  // 셀렉터가 없거나 셀렉터 타입이 스트링(문자)가 아닐경우
  if (!selector || typeof selector !== "string") {
    console.warn("선택자가 비어있거나 문자 데이터가 아님"); // 리턴 시키기 위한 경고 error는 진짜 에러일떄
    return;
  }
  const element = document.querySelectorAll(selector);
  if (!element) {
    console.warn(`현재 ${selector}는 페이지에 없슴`);
    return;
  }
  // console.log(element); // 둘다 확인 했으니 리턴시켜줌
  return element;
};
