import { el } from "../helper.js";

export const list7Bind = (arry) => {
  // 3. 유효성 검사
  const element = document.querySelector(".shop-list");
  if (!element) {
    return;
  }

  // *
  // map() - forEach 처럼 하나의 객체 각각을 가져와 함수안에서 처리 후 새로운 배열 만듦
  const liItems = arry.map((item) => {
    // console.log(item); // itme은 - 객체

    // 1.
    //   return /* html */ `
    //    <li>
    //         <span class="brand color${item.id}"><img src=${item.logo} alt="" /></span>
    //         <p class="title">${item.title}</p>
    //         <ul>
    //           <li>기간<span>${item?.date || "-"}</span></li>   <!-- 옵셔널 체이닝 -->
    //           <li> 적립일 <span>${item.saveDate}</span></li>
    //           <li> 대상<span>${item.target}</span></li>
    //           <!-- <li>혜택<span class="blue">${item.benefit}</span></li> 이걸 아래코드로 -->
    //           ${item.benefit ? `<li>혜택<span class="blue">${item.benefit}</span></li>` : ""}
    //         </ul>
    //       </li>
    //   `; // 리턴을 시켜. 결과를 밖으로 내보냄
    // });

    // 2.구조분해할당 해서 .(점)제거
    // 구조분해할당
    const { title, benefit, date, id, logo, saveDate, target } = item;

    return /* html */ `
     <li>
          <span class="brand color${id}"><img src=${logo} alt="" /></span>
          <p class="title">${title}</p>
          <ul>
            <li>기간<span>${item?.date || "-"}</span></li>   <!-- 옵셔널 체이닝 -->
            <li> 적립일 <span>${saveDate}</span></li>
            <li> 대상<span>${target}</span></li>
            <!-- <li>혜택<span class="blue">${benefit}</span></li> 이걸 아래코드로 -->
            ${benefit ? `<li>혜택<span class="blue">${benefit}</span></li>` : ""}
          </ul>
        </li>
    `; // 리턴을 시켜. 결과를 밖으로 내보냄
  });

  // console.log(liItems);
  // el(".shop-list").innerHTML = liItems; // 이상하게 나옴. 배열은 ,(쉼표)로 구분하기 때문에.
  el(".shop-list").innerHTML = liItems.join("");
};
