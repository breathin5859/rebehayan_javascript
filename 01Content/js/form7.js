//  이메일 선택
const selectEmail = () => {
  const select = document.querySelectorAll(".email select");
  const inputEmail = document.querySelector(".domain");
  // console.log(select[1].value);

  select.forEach((domain, domainIndex) => {
    // 초기값
    const initial = domain.value;
    inputEmail.value = initial;

    // option 변했을때 & 직접입력 readonly
    domain.addEventListener("change", () => {
      const isValue = select[domainIndex].value;
      // console.log(isValue);
      inputEmail.value = isValue;

      if (isValue) {
        inputEmail.value = isValue;
        inputEmail.setAttribute("readonly", true);
      } else {
        inputEmail.removeAttribute("readonly");
      }
    });
  });
};

selectEmail();

// 추천인 경고
const inputError = () => {
  const input = document.querySelector(".recommender input");
  const checkButton = document.querySelector(".recommender button");
  const errorMessage = document.querySelector("#message");

  checkButton.addEventListener("click", () => {
    const isValue = input.value;
    // console.log(isValue);

    if (!isValue) {
      errorMessage.textContent = "추천인을 입력하세요";
      errorMessage.style.color = "red";
    } else {
      errorMessage.textContent = "";
    }
  });
};

inputError();
