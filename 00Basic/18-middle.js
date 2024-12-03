// 임포트 받은 파이을 다시 익스포트 시킬거 (중간다리 역힐)
// 폴더구조
// js / ui / toolbar.js
//           navigator.js
// sass 앱스트렉트 as * / 인덱스 역할

// import { user, userIfo } from "./18-user";
export { user, userInfo } from "./18-user.js";
export { address } from "./18-company.js";

// import 자리에 export 써주면 바로나감
// 디폴트는 안됨
