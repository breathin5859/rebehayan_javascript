export const Details = () => {
  const details = document.querySelectorAll("details");
  const links = document.querySelectorAll("a");

  // 현재 열린 details의 위치를 배열로 저장하는 함수
  const getOpenDetailsIndexes = () => Array.from(details).map((detail) => detail.hasAttribute("open"));

  // details 상태를 복원하는 함수
  const restoreDetailsState = (openDetailsState) => {
    if (!openDetailsState) return; // 저장된 상태가 없으면 아무것도 안 함

    openDetailsState.forEach((isOpen, index) => {
      if (details[index]) {
        if (isOpen) {
          details[index].setAttribute("open", "");
        } else {
          details[index].removeAttribute("open");
        }
      }
    });
  };

  // 페이지 이동 시 details 상태를 localStorage에 저장
  links.forEach((link) => {
    link.addEventListener("click", () => {
      const openDetailsState = getOpenDetailsIndexes();
      localStorage.setItem("openDetailsState", JSON.stringify(openDetailsState));
    });
  });

  // 페이지 로드 시 localStorage에서 상태를 가져와 복원
  document.addEventListener("DOMContentLoaded", () => {
    const storedState = JSON.parse(localStorage.getItem("openDetailsState"));
    restoreDetailsState(storedState);
  });

  // 히스토리 탐색 시 popstate 이벤트로 상태 복원
  window.addEventListener("popstate", () => {
    const storedState = JSON.parse(localStorage.getItem("openDetailsState"));
    restoreDetailsState(storedState);
  });
};
