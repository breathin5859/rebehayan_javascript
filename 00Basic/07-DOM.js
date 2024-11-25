/* -------------------------------------------------------------------------- */
/*                                   DOM 선택자                                */
/* -------------------------------------------------------------------------- */
// $("css문법") - jQuery
// document.querySelector('div').addEventListener()

//  *
//  querySelector - 단일선택자. 똑같은 여러개 요소가 있어도 하나만 잡힘.
const item1 = document.querySelector(".yourname-list .item1");
// console.log(item1);
item1.style.border = "1px solid red";

// *
// querySelectorAll - 복수선택
const items = document.querySelectorAll(".yourname-list li");
// console.log(items); // 노드리스트 - 유사배열
// console.log(items.length) // 갯수확인
// console.log(items.[1]) // 개별아이템 접근

// items.style.border = "1px solid blue"; // 배열은 각각 잡아서 해야해서 안들어감

// items.forEach((개별아이템, 개별아이템index값) => {
//   console.log(개별아이템, 개별아이템index값);
// });

// 작명시 복수 단수 구분할것
items.forEach((item) => {
  item.style.border = "2px solid blue";
  // querySelectorAll 랑 forEach 랑 짝꿍이라보면됨
});

/* -------------------------------------------------------------------------- */
/*                                 DOM 클래스 제어                              */
/* -------------------------------------------------------------------------- */
const tabButtons = document.querySelectorAll(".tabs button");

// 클래스 추가
// tabButtons.forEach((tabButton) => {
//   // tabButton.addEventListener(이벤트,콜백함수)
//   tabButton.addEventListener("click", () => {
//     console.log("클릭됨");

//     // tabButton.classList.add('클래스명') - 클래스추가
//     tabButton.classList.add("active");
//   });
// });

// 클래스 제거
// tabButtons.forEach((tabButton) => {
//   tabButton.addEventListener("click", () => {
//     tabButton.classList.remove("active");
//   });
// });

// 클래스 토글
tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", () => {
    tabButton.classList.toggle("active");
  });
});

/* -------------------------------------------------------------------------- */
/*                                 DOM 텍스트 제어                              */
/* -------------------------------------------------------------------------- */

// const isName = document.querySelector(".text-list .name");
// console.log(isName.textContent);
// isName.textContent = "이름넣기";

//
const changeName = () => {
  const isButton = document.querySelector(".text-list button");
  const isName = document.querySelector(".text-list .name");

  isButton.addEventListener("click", () => {
    const name = isName.textContent;
    console.log(name);
    isButton.textContent = `${name}님이 수강신청을 하셨습니다`;
  });
};
// changeName();

const courseRegist = () => {
  const buttons = document.querySelectorAll(".text-list button");
  const names = document.querySelectorAll(".text-list .name");

  buttons.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => {
      // console.log(button, buttonIndex); // 클릭한 버튼 인덱스
      names.forEach((name, nameIndex) => {
        // console.log(name, nameIndex); // 클릭하면 이름 전체 인텍스 나옴
        if (buttonIndex === nameIndex) {
          // 버튼인덱스와 이름의 인덱스 비교해서 같으면 이름 가져옴
          // console.log(name);
          const isName = name.textContent;
          // console.log(isName);
          button.textContent = `${isName}님 신청완료`;
        }
      });
    });
  });
};
courseRegist();
/* -------------------------------------------------------------------------- */
/*                                  DOM 속성 제어                              */
/* -------------------------------------------------------------------------- */

const disabledRadio = () => {
  // 버튼하나
  // const radio = document.querySelector(".ratings input");
  // // radio.setAttribute('속성명', '속성값') 어트리뷰트 추가
  // radio.setAttribute("disabled", true);

  // 버튼하나 누르면 나머지 비활성
  const radios = document.querySelectorAll(".ratings input");
  const disabledButton = document.querySelector(".btn-disabled");

  let idDisabled = true;

  // 모두비활성
  const disabled = (selector) => {
    radios.forEach((radio) => {
      if (idDisabled) {
        disabledButton.textContent = "모두 활성";
        radio.setAttribute("disabled", true);
      } else {
        disabledButton.textContent = "모두 비활성";
        radio.removeAttribute("disabled");
      }
    });
    idDisabled = !idDisabled;
  };

  disabledButton.addEventListener("click", disabled);
};
disabledRadio(".btn-disabled");

// 비밀번호
const passwordView = () => {
  const button = document.querySelector(".password button");
  const input = document.querySelector(".password input");

  // 함수바인드
  const bind = () => {
    addClass();
    changeType();
  };

  // 클래스 추가
  const addClass = () => {
    button.classList.toggle("active");
  };

  // input type 수정
  const changeType = () => {
    const isType = input.getAttribute("type");
    console.log(isType);

    if (isType === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  };

  // 이벤트 실행
  button.addEventListener("click", bind);
};
passwordView();

// *
// 이름변경
const readonlyName = () => {
  const button = document.querySelector(".name button");
  const input = document.querySelector(".name input");
  const h1 = document.querySelector(".header h1 strong");

  button.addEventListener("click", () => {
    const isReadonly = input.hasAttribute("readonly");
    if (isReadonly) {
      input.removeAttribute("readonly");
    } else {
      const isValue = input.value;
      h1.textContent = isValue;

      console.log(isValue);

      input.setAttribute("readonly", true);
    }
    console.log(isReadonly);

    // input.removeAttribute("readonly");
  });

  // 1.이름변경 누르면 비활성 -> 활성
  // 2.한번더 이름변경 누르면  input -> 비활성
  // 2-1. h1텍스트가 input의 value값을 h1의 내용으로 바뀜
};
readonlyName();

//  hasAttribute - alt 넣기
const imageAlt = () => {
  const image = document.querySelector(".avatar");
  const button = document.querySelector(".btn-alt");
  button.addEventListener("click", () => {
    const isAlt = image.hasAttribute("alt");
    console.log(isAlt);
    if (!isAlt) {
      image.setAttribute("alt", "프로필");
    }
  });
};
imageAlt();

// value 조회
// const isValue = document.querySelector(".ratings input").value;
// console.log(isValue);

//  프로필사진 변경
const changeProfile = () => {
  const button = document.querySelector(".change-profile");
  const profile = document.querySelector(".avatar");

  button.addEventListener("click", () => {
    const isImage = profile.hasAttribute("src");
    console.log(isImage);

    profile.setAttribute("src", "./images/hand.svg");
  });
};
changeProfile();

// 점수 알려주기
const checkScore = () => {
  const button = document.querySelector(".btn-score");
  const radios = document.querySelectorAll(".ratings input");

  button.addEventListener("click", () => {
    // console.log(radios[0].checked);

    let isChecked = false;

    radios.forEach((radio) => {
      // console.log(radio.checked);
      if (radio.checked) {
        const value = radio.value;
        console.log(`선택된 점수는 ${value}입니다`);
        isChecked = true;
      }
    });

    // if (!isChecked) {
    //   console.log("점수를 선택 하세요");
    // }
    !isChecked && console.log("점수를 선택해주세요");
  });
};
checkScore();

// *
// 파일이름, 파일 사이즈
const addFile = () => {
  const file = document.querySelector(".file");
  const fileInfo = document.querySelector(".file-info");

  file.addEventListener("change", () => {
    // console.log(file.files[0].name);
    const fileName = file.files[0].name;
    const fileSize = file.files[0].size / 1024;
    console.log(fileSize);

    // toFixed - 소숫점 절삭
    fileInfo.textContent = `파일이름 : ${fileName} / 파일크기 : ${fileSize.toFixed(2)} kb`;
  });
};
addFile();

// *
// 팝업제어
const dialog = () => {
  const openButton = document.querySelector(".header button");
  const closeButton = document.querySelector(".dialog .close");
  const dialog = document.querySelector(".dialog");

  openButton.addEventListener("click", () => {
    dialog.showModal();
  });
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
};
dialog();

/* -------------------------------------------------------------------------- */
/*                                 DOM CSS 제어                                */
/* -------------------------------------------------------------------------- */

const strong = document.querySelector(".css .item1 strong");
const item3 = document.querySelector(".css .item3");

//  css 하나씩 넣을때
// strong.style.fontSize = "25px";
// strong.style.color = "orange";

//  여러개넣을때 (빽틱)
strong.style.cssText = `
  font-size: 10px;
  color:orange;
`;

// *
// 변수변경
item3.style.setProperty("--primary", "green");
item3.style.setProperty("--primaryLight", "orange");

// *
// css적용된 스타일 찾기
const item4 = document.querySelector(".css .item4");
const isStyle = getComputedStyle(item4).color;
console.log(isStyle);

/* -------------------------------------------------------------------------- */
/*                                   DOM 탐색                                  */
/* -------------------------------------------------------------------------- */

// 다음형제 찾기.
const siblings = () => {
  const item1 = document.querySelector(".routine-list .item1");
  const item2 = document.querySelector(".routine-list .item2");

  item1.addEventListener("click", () => {
    const next = item1.nextElementSibling;
    console.log(next);
    next.classList.toggle("active");
  });

  // 이전형제 찾기
  item2.addEventListener("click", () => {
    const prev = item2.previousElementSibling;
    console.log(prev);
    prev.classList.toggle("active");
  });
};

// siblings();

// *
// 클릭한 부모에 클래스
const toggleDays = () => {
  const buttons = document.querySelectorAll(".routine-list > li > button");
  // 한개
  // button.addEventListener("click", () => {
  //   const parent = button.parentElement;
  //   console.log(parent);
  //   parent.classList.toggle("active");
  // });

  // 모든 li
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const parent = e.currentTarget.parentElement;
      const children = e.currentTarget.children;

      // console.log(parent);
      parent.classList.toggle("active");

      // console.log(children);
      // children[1].style.color = "yellow";
      if (children[1].hasAttribute("style")) {
        children[1].removeAttribute("style");
      } else {
        children[1].style.color = "yellow";
        // 스타일은 Css로 하는게 좋음(점수가 높아져 밀림)
      }
    });
  });
};
toggleDays();

// *
// 조상부모선택자 - 가장 가까운 부모
// closest 나를 기준을 부모를 탐색

const toggleDepth = () => {
  const buttons = document.querySelectorAll(".routine-list button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // console.log(e.currentTarget);
      const depthButton = e.currentTarget;
      if (depthButton.closest("div")) {
        depthButton.closest("li").style.border = "5px dashed red";
      }
    });
  });
};
toggleDepth();

// *
// contains -  특정 요소를 포함하고 있는지 확인할때 사용 - hasclass 느낌

const checkDepth = () => {
  const items = document.querySelectorAll(".routine-list > li");

  items.forEach((item) => {
    const depth = item.querySelector(".detail-list");
    console.log(item.contains(depth));

    if (!item.contains(depth)) {
      const button = item.querySelector("button");
      button.setAttribute("role", "link"); // role 많이 쓰임
      button.addEventListener("click", () => {
        window.location.href = "#page";
      });
    }
  });
};
checkDepth();

/* -------------------------------------------------------------------------- */
/*                                   DOM 삽입                                  */
/* -------------------------------------------------------------------------- */
// 내가 원하는 곳애 삽입 시킬 수 있음
// 형제로 삽입하려면

const insertDOM = () => {
  const ul = document.querySelector(".routine-list");

  // ul.insertAdjacentElement(위치, HTMl코드)
  ul.insertAdjacentHTML(
    "beforebegin", // 요소 앞요소로 생성
    `
    <h3>제목입니다</h3>
    <span>서브텍스트</span>
    `
  );

  //
  ul.insertAdjacentHTML("afterend", `<h3>다음형제로 삽입</h3>`);

  // prepend() - 첫번째 요소삽입
  // createElement() - 새로운 HTML 생성
  const li = document.createElement("li"); // 1회용 한번만 만듬/
  li.textContent = "첫번째자식";
  li.classList.add("first");
  ul.prepend(li); // prepend html 지원 안해서 택스트만 들어감. 그러니 돔을 생성해줘야함

  // append() - 마지막 요소 삽입
  const liLast = document.createElement("li");
  liLast.textContent = "마지막자식";
  liLast.classList.add("lase");
  ul.append(liLast);

  //
  // ul.remove();

  // innerHTML() - 안에 요소 다 날라가고 새롭개 만듦
  // ul.innerHTML = "<li>새로 생성된 DOM</li>"; // 한줄
  ul.innerHTML = `
    <li>새로 생성된 DOM</li>
    <li>새로 생성된 DOM</li>
    <li>새로 생성된 DOM</li>
  `; // 여러줄

  // ul.innerHTML = '텍스트삽입' // 일방적인 삽입만 가능
  // textContent 같음
  // 다른점은 textContent는 값을 전달가능함
  // const text = div.textContent // textContent는 담을 수 있지만, innerHTML은 일방적 삽입만 가능
};

insertDOM();
