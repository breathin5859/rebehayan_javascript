// import { 실행할 함수명 } from "파일경로.확장자";
// 함수명 매번 외워야하니 예약어 있음. ctrl + space
// import { user } from "./18-user.js"; // 한개
// import { user, userInfo } from "./18-user.js"; // 여러개

// *
// 함수이름변경
// import { user as userA, userInfo } from "./18-user.js"; // 파일내 함수 이름 변경,
// 똑같은 함수명일때 이름변경하는데 할수있으나 가능한 안하는게 좋음. 헷갈림
// 파일명 함수명 동일하게

// *
// default
// import company, { address } from "./18-company.js"; // 디폴트는 중괄호 없어야함
// import c, { address } from "./18-company.js"; // 디폴트는 파일이 하나니까 이름변경해서 그냥쓰면됨

// *
//  index 역할을 하는 미들 파일을 임포트
import { address, user, userInfo } from "./18-middle.js";

// 함수실행은 필요한 곳애만 임포트 시켜서 실행.
user();
// userA(); // 이름 변경햇으니
userInfo();
// company();
//  c(); // company 이름 변경했으니
address();
