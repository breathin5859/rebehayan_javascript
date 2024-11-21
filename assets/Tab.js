export const Tab = (id) => {
  const config = {
    tabID: id,
    className: "active",
  };
  const { className, tabID } = config;

  const tabs = document.querySelectorAll(`[data-tab=${tabID}] [data-tab-item]`);
  const tabContents = document.querySelectorAll(`[data-tab-contents=${tabID}] [data-tab-content]`);

  if (tabID == null) {
    console.log("탭아이디를 넣어주세요.");
    return;
  }
  if (typeof tabID != "string") {
    console.log(typeof tabID);

    console.log("Tab ID는 String이어야 합니다.");
    return;
  }

  // NodeLIst는 유사배열이므로 length를 사용하여 검사한다.
  if (tabs.length === 0 || tabContents.length === 0) {
    return;
  }

  // 탭닫기
  const closeTab = () => {
    tabs.forEach((tab) => {
      tab.classList.remove(className);
    });
  };

  // 탭열기
  const openTab = (event) => {
    event.target.classList.add(className);
  };

  // 탭콘텐츠 열기
  const openContent = (index) => {
    tabContents.forEach((content, contentIndex) => {
      if (index === contentIndex) {
        content.classList.add(className);
      }
    });
  };

  // 탭콘텐츠 닫기
  const closeContent = () => {
    tabContents.forEach((content) => {
      content.classList.remove(className);
    });
  };

  // 초기셋팅
  const init = () => {
    tabs[0].classList.add(className);
    tabContents[0].classList.add(className);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
      closeTab();
      openTab(event);
      closeContent();
      openContent(index);
    });
  });

  init();
};
