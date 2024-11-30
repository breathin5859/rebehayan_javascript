//  전체동의
const checkAll = () => {
  const all = document.querySelector("#chk3_1");
  const checkEls = document.querySelectorAll(".check-wrap input");

  // 이미 아래 동의를 누른채 all 누르면 반전 돼버림.  이러면 안됨!!
  // all.addEventListener("click", () => {
  //   checkEls.forEach((checkEl) => {
  //     console.log(checkEl.checked);

  //     if (checkEl.checked) {
  //       checkEl.checked = false;
  //     } else {
  //       checkEl.checked = true;
  //     }
  //   });
  // });

  // 그래서 클릭하면 아래 체크를 제어했으나. all 의 상태에 따라 제어히게끔
  all.addEventListener("click", (e) => {
    const checkAll = e.target;
    console.log(checkAll.checked);

    checkEls.forEach((checkEl) => {
      checkEl.checked = checkAll.checked;
    });
  });
};

checkAll();

const handleSubmmit = () => {
  const form = document.querySelector("form");
  const checkEls = document.querySelectorAll(".check-wrap input");

  // submit- form을 발송
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // form, button-submit 새로고침 방지

    //
    // checkEls.forEach((checkEl) => {
    //   if (!checkEl.checked) {
    //     console.log("모두 동의해주세요");
    //   } else {
    //     console.log("데이터 전송");
    //   }
    // });

    let isChecked = true;

    checkEls.forEach((checkEl) => {
      // 하나라도 체크가 안된경우 를 걸러내고
      if (!checkEl.checked) {
        //경우 1
        // 만약 check가 됏다면 true 찍힘
        // true !(부정연산자) 때문에 false반전됨
        // if true에서만 작동하기 땨문애 아래코드가 실행안됨

        //경우 2
        // 만약 check가 안됏다면 false 찍힘
        // false !(부정연산자) 때문에 true 반전됨
        // if true에서만 작동하기 땨문애 아래코드가 실행됨

        isChecked = false;
      }
    });

    if (isChecked) {
      console.log("데이터전송");
    } else {
      console.log("모두체크해주세요");
    }
  });
};

handleSubmmit();
