/* -------------------------------------------------------------------------- */
/*                                  표준내장객체 문자                           */
/* -------------------------------------------------------------------------- */

// *
// length - 공백을 포함한 글자의 갯수 알려줌
const string = "kim eunjin";
console.log(string.length);
// 배열
const arry = [1, 2, 3];
console.log(arry.length);

// *
// includes() - 글자가 포함되어있는지 확인
const stringFullname = "kim eunjin";
console.log(stringFullname.includes("eun")); // 존재하니 true
console.log(stringFullname.includes("eun", 2)); // (단어, n이후로 조회)

const arryWord = ["kim", "eun", "jin"];
console.log(arryWord.includes("jin")); // 배열 데이터 조회도 가능

// *
// indexOf() - 특정 문자가 몇번째 있는지
const myName = "kimeunjin";
