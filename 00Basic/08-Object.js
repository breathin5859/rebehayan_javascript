/* -------------------------------------------------------------------------- */
/*                                    객체생성                                 */
/* -------------------------------------------------------------------------- */

const user = {
  name: "Rebehayan",
  short: "저를 소개합니다.",
  information: {
    age: 44,
    // city: "incheon",
    country: "korea",
  },
  result: () => {
    console.log("test");
    // 객체안의 함수는 메서드
  },
};

// 제이쿼리 - 메서드 체이닝 방식( 메서드.메서드,메서드)

// 객체 추가 .(점)으로 추가
user.birth = "1999.99.99";
// console.log(user.키명);
console.log(user);
console.log(user.information.age);
const fn = user.result(); // 메서드는 변수에 담아 실행

// 옵셔널 체이닝 - 체이닝은 점으로 연결된것
console.log(user.information?.image || `이미지가 없습니다`); // 없는걸 조회한경우 뒤의 값을 실행하게 할 수 있음

const information = () => {
  const ul = document.querySelector(".infomation");
  const age = ul.children[0].querySelector("span");
  const city = ul.children[1].querySelector("span");
  const country = ul.children[2].querySelector("span");

  console.log(ul.children);

  // age.innerHTML = user.information.age;
  // city.innerHTML = user.information.city;
  // country.innerHTML = user.information.country;

  // 데이터가 없는경우 undefind로 뜨지 않게 하기 위해 옵셔널 체이닝
  ul.innerHTML = `
    <li><span>${user.information.age}</span><strong>Age</strong></li>
    <li><span>${user.information?.city || "-"}</span><strong>City</strong></li> 
    <li><span>${user.information.country}</span><strong>Country</strong></li>`;
};

information();

// 구조분해할당 - 다른으름 대체해 빠르게 접근가능
//  배열
const arry = ["a", "b", "c"];
console.log(arry[1]);

const [a, item, sol] = arry;

console.log(sol);

// 객체
const obj = {
  item1: "text",
  item2: 1234,
  item3: "jin2",
};

// const {key }
const { item1, item2, item3 } = obj;

console.log(obj.item3);

// 실습

const tabCoutentItems = {
  img: "./images/001.jpg",
  title: "UX Design",
  info: {
    view: 100,
    like: 4.5,
  },
  lectures: "80 Lectures",
  price: "50,000",
};

const { img, title, info, lectures, price } = tabCoutentItems;
const { like, view } = info;
const tabCoutent = () => {
  const item = document.querySelector(".tab-content > div");

  // 구조분해할당을 한 경우는 옵셔널 채이닝 할 수 없음
  // 구조분해할당을 한 경우 물음표 연산자 이용해서 - 조건 ? 참일 때 실행되는 값 : 거짓일 때 실행되는 값;
  item.innerHTML = `
   ${img ? `<img src=${img} />` : "..."}
    <strong class="title">${title}</strong>
    <div class="info">
      <span class="view">${view ? view : "0"}</span>
      <span class="like">${like ? like : "-"} </span>
    </div>
    <div class="lectures">${lectures}</div>
    <div class="price">${price}원</div>
  `;
};

tabCoutent();

/* -------------------------------------------------------------------------- */
/*                                    객체접근                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   선택적 체이닝                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  배열 구조분해할당                           */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  객체 구조분해할당                            */
/* -------------------------------------------------------------------------- */
