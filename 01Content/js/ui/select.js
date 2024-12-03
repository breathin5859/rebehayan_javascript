import { el, els } from "../helper.js";

export const select = (element = ".select", activeClass = "active") => {
  // 3. 디자인이 달라질 경우 클래스 매개변수로 받아 사용가능 그러기 위해서 초기값, 구조분해할당
  const config = {
    selectName: element,
    className: activeClass,
  };

  const { className, selectName } = config;

  // 할일목록
  // 1. 선택하세요 클릭하면 화살표 방향 바뀜
  const handleSelect = (selector) => {
    const button = selector.children[0];

    button.addEventListener("click", (e) => {
      e.preventDefault();

      // 1-1 화살표방향 바뀜
      const parent = e.target.parentElement;
      // console.log(parent);
      parent.classList.toggle(className);
      // 1-2 리스트 펼쳐짐 toggle
    });
  };

  const handleSelectList = (selector) => {
    const buttons = selector.querySelectorAll("ul button");

    buttons.forEach((button) => {
      // 2. 리스트에 있는 버튼을 클릭하면 닫힘
      button.addEventListener("click", (e) => {
        e.preventDefault();
        // 2-1 리스트가 닫힌다
        const parent = e.target.closest(selectName);
        parent.classList.remove(className);
        // 2-2 클릭한 버튼의 텍스트기 대신써져야한다
        const isText = e.target.textContent;
        console.log(isText);
        parent.children[0].textContent = isText;
      });
    });
  };

  els(selectName).forEach((select) => {
    handleSelect(select);
    handleSelectList(select);
  });
};
