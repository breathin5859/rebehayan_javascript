import { el } from "../helper.js";

export const learningLounge = (arry) => {
  const listItems = arry.map((item) => {
    const { id, thumbnail, badges, title, hastag, state, date, period } = arry;
    const { color, coin } = badges;
    const { tag1, tag2 } = hastag;

    return /* html */ `
       <li>
            <a href="">
              <div class="thumbnail">
                <img src="${thumbnail}" alt="" />
              </div>
              <div class="badges">
                <span class="badge ${color}">경영</span>
                <span class="badge ${coin}">100</span>
              </div>
              <strong class="list-type1__title">${title}</strong>
              <div class="hash">
                <span>${tag1}</span>
                <span>${tag2}</span>
              </div>
              <ul class="list-type2">
                <li>
                  <span>형 태</span>
                  <div>${state}</div>
                </li>
                <li>
                  <span>일 정</span>
                  <div>${date}</div>
                </li>
              </ul>
              <div class="list-type1__date">신청기간 : ${period}</div>
            </a>
          </li>
    `;
  });

  el(".learninglounge .list-type1").innerHTML = listItems.join("");
};
