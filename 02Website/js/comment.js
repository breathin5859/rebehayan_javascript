// export const comment = () => {
//   // 유효성검사
//   const comment = document.querySelector(".comment");

//   if (!comment) {
//     return;
//   }

//   let count;

//   // 이벤트 바인드
//   const bindEvent = () => {
//     comment.addEventListener("submit", (e) => {
//       e.preventDefault();
//       write();
//       handlecount();
//       console.log("전송");
//     });
//   };
//   // 댓글내용유뮤확인
//   const checkValue = () => {
//     const value = comment.querySelector("textarea").value;
//     const list = comment.querySelector(".comment__list ");
//     if (value === "") {
//       console.log("댓글 입력해라");
//     }
//   };

//   // 댓글작성
//   const write = () => {
//     // 댓글 유혀성 검사
//     const taxtarea = comment.querySelector("textarea");
//     const value = taxtarea.value;
//     if (value === "") {
//       console.log("댓글 입력해라");
//       return;
//     }

//     const li = document.createElement("li");
//     li.innerHTML = /* html */ `
//        <div class="avatar">
//                 <img src="../images/@avatar.png" alt="" />
//               </div>
//               <div class="comment__info">
//                 <div class="comment__name">Chwwwl8007</div>
//                 <div class="comment__date">${new Date()}</div>
//                 <div class="comment__btn">
//                   <button type="button" class="delete">글삭제</button>
//                 </div>
//                 <div class="comment__content">${value}</div>
//               </div>
//     `;
//     list.append(li);
//     taxtarea.value = "";
//     taxtarea.focus();

//     li.querySelector(".delete").addEventListener("click", deleteComment);
//   };

//   // 댓글삭제
//   const deleteComment = (e) => {
//     e.target.closest("li").remove();
//   };

//   // 댓글카운트

//   const handlecount = () => {
//     count = comment.querySelectorAll(".comment__list li").length;
//     const isCount = document.querySelector(".comment__count");
//     isCount.textContent = `${count}개의 댓글이 있습니다`;
//     // console.log(count);
//   };

//   bindEvent();
// };

export const comment = () => {
  // 유효성검사
  const comment = document.querySelector(".comment");
  if (!comment) {
    return;
  }

  // 이벤트바인드
  const bindEvent = () => {
    comment.addEventListener("submit", (e) => {
      e.preventDefault();
      write();
      handleCount();
    });
  };

  // 댓글작성
  const write = () => {
    // 댓글 유효성검사
    const textarea = comment.querySelector("textarea");
    const value = textarea.value;
    const list = comment.querySelector(".comment__list");
    if (value.trim() === "") {
      console.log("댓글내용을 입력해주세요.");
      return;
    }

    const li = document.createElement("li");

    li.innerHTML = /* html */ `
        <div class="avatar">
            <img src="../images/@avatar.png" alt="" />
            </div>
            <div class="comment__info">
            <div class="comment__name">Chwwwl8007</div>
            <div class="comment__date">${new Date()}</div>
            <div class="comment__btn">
                <button type="button" class="delete">글삭제</button>
            </div>
            <div class="comment__content">${value}</div>
        </div>
    `;

    list.append(li);
    textarea.value = "";
    textarea.focus();

    li.querySelector(".delete").addEventListener("click", deleteComment);
  };

  // 댓글삭제
  const deleteComment = (e) => {
    e.target.closest("li").remove();
    handleCount();
  };
  // 댓글카운트
  const handleCount = () => {
    const lis = comment.querySelectorAll(".comment__list li").length;
    // console.log(count);
    updateComment(lis);
  };

  // 댓글 갯수업데이트
  const updateComment = (count) => {
    const isCount = document.querySelector(".comment__count");
    isCount.textContent = `${count}개의 댓글이 있습니다.`;
  };

  bindEvent();
};
