import { el } from "../helper.js";

export const includeHTML = (location, selector) => {
  // 2. 유효성검사
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }

  // 1.
  // fetch('file경로') -  서버실행 // 현재위치 기준아닌 절대경로.
  const include = fetch(location)
    // .than((통신결과값))
    .then((response) => {
      // console.log(response); // ok(통신이 잘 되는지), status만 알면됨.
      return response.text(); // 받은걸 텍스트화 시켜서 리턴 html코드를 텍스트화 시켜서
    })
    .then((data) => {
      // console.log(data);
      el(selector).innerHTML = data;
    });
  return include;
};
