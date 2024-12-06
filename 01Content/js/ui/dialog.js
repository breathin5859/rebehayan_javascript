// 헬퍼함 수 불러오기
import { el, els } from "../helper.js";

// enf치면 스니펫 뜸 / 작성후 탭키 딜리트/ 탭 엔터 치면 빠른 작성

// *
//  1.팝업 한개 열기
// export const dialog = () => {
//   // 다이얼로그 열기
//   const dialog = "dialog"; // 반복되는 선택자 변수 정의 이유는?? -
//   el("button ").addEventListener("click", () => {
//     el(dialog).show();
//   });
//   el(".btn-close").addEventListener("click", () => {
//     el(dialog).close();
//   });
//   // 다이얼로그 열기 - data-(데이터속성) []속성선택자 안에 써서 하나열기
//   const dialog = "[data-dialog='popup1']";
//   const open = "[data-dialog-open='popup1']";
//   const close = "[data-dialog-close='popup1']";
//   el(open).addEventListener("click", () => {
//     el(dialog).show();
//   });
//   el(close).addEventListener("click", () => {
//     el(dialog).close();
//   });
// };

// 2.여러개 팝업 열기
//  모달 기본값 false 주고 필요할때 호출에 인수 true 적어주면 됨
export const dialog = (selector, modal = false) => {
  // 2-4 유효성검사 - 해당페이지에 있을경우
  const isDialog = document.querySelector(`[data-dialog=${selector}]`);
  const isOpen = document.querySelector(`[data-dialog-open=${selector}]`);
  const isClose = document.querySelector(`[data-dialog-close=${selector}]`);
  // el을 안쓰는 이유는 이미 선택자가 없으면 오류 일으켜 if문 못탐.

  if (!isDialog || !isOpen || !isClose) {
    return; // 없으면 종료
  }

  const dialog = `[data-dialog=${selector}]`;
  const open = `[data-dialog-open=${selector}]`;
  const close = `[data-dialog-close=${selector}]`;

  //  2-1
  // el(open).addEventListener("click", () => {
  //   // if (modal) {
  //   //   el(dialog).showModal();
  //   // } else {
  //   //   el(dialog).show();
  //   // }

  // 2-2
  //   //  위 if문 삼항연산자로
  //   modal ? el(dialog).showModal() : el(dialog).show();
  // });

  // 2-3
  // 위의 함수 정리 함수와 이벤트 나눠 정리 - 마지막인 이렇게 코딩해야 깔끔스

  // 함수
  // 팝업열기
  const handleOpen = () => {
    modal ? el(dialog).showModal() : el(dialog).show();
  };
  // 팝업닫기
  const handleClose = () => {
    el(dialog).close();
  };

  // 이벤트
  el(open).addEventListener("click", handleOpen);
  el(close).addEventListener("click", handleClose);
};
