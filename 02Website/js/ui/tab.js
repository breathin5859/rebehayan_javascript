export const tab = (id, option = {}) => {
  const config = {
    activeClass: "--active",
    ...option, // 전개연산자
  };

  // 전개연산자
  // const a = [1, 2, 3];
  // const b = [4, 5, 6];
  // console.log(...a, ...b); // 이어서 써짐

  const { activeClass } = config;

  // id 문자이어야하니까

  if (typeof id !== "string") {
    console.error("string으로 넣어주세요");
    return;
  }

  const tabNav = document.querySelectorAll(`[data-tabs=${id}] [data-tab]`);
  const tabContents = document.querySelectorAll(`[data-tab-contents=${id}] [data-tab-content]`);

  // 유호성검사
  if (tabNav.length === 0 || tabContents.length === 0) {
    return;
  }

  // 이벤트바인드 - 실행하는 이벤트

  const bindEvent = () => {
    tabNav.forEach((tab, index) => {
      tab.addEventListener("click", (event) => {
        // console.log(index);

        closeTab();
        openTab(event);
        closeTabPanel();
        openTabPanel(index); // 클릭한 인덱스를 받아서 탭패널에서
      });
    });
  };

  // 이벤트 정의를 아래에

  // 탭열기
  const openTab = (event) => {
    // console.log(event + "탭 클릭했소");
    event.target.classList.add(activeClass);
  };
  // 탭닫기

  const closeTab = () => {
    tabNav.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  };
  // 탭패널 열기

  const openTabPanel = (index) => {
    // 버튼인덱스와 패널 인덱스 비교
    tabContents.forEach((tabPanel, tabPanelIndex) => {
      if (index === tabPanelIndex) {
        // tabPanel.style.display = "block";
        tabPanel.classList.add(activeClass); // css 클래스로 열경우
      }
    });
  };
  // 탭패널 닫기
  const closeTabPanel = (index) => {
    // 버튼인덱스와 패널 인덱스 비교
    tabContents.forEach((tabPanel, tabPanelIndex) => {
      // tabPanel.style.display = " none";
      tabPanel.classList.remove(activeClass); // css 클래스로 닫을경우
    });
  };

  // 초기실행
  const init = () => {
    tabNav[0].classList.add(activeClass);
    tabContents[0].classList.add(activeClass);
  };
  init();
  bindEvent();
};
