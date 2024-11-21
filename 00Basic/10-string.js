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
console.log(myName.indexOf("eun"));
console.log(myName.indexOf("dong")); // 원하는 데이터 없을때 -1

// *
// replace() - 특정문자 교체
const myFather = "kimdongjun jun jun";
// console.log(myFather.replace('바꿀단어', '바뀔단어'));
console.log(myFather.replace("jun", "joon")); // 첫단어 하나만 바뀜
console.log(myFather.replace(/jun/g, "joon")); // 모두 바꾸려면 정규식 - replace all

// *
// slice() - 특정 범위문자  추출
const myMother = "leeshinok";
// console.log(myMother.slice(시작되는 숫자, 끝 수-미만));
console.log(myMother.slice(0, 3));
console.log(myMother.slice(3)); // 특정수에서 마지막까지는 시작부분 하나만 넣으면 됨
console.log(myMother.slice(3, -1)); // -1 끝에서 부터 역으로 조회

// *
// split() - 특정 구분자로 배열을 만들어줌
let myBrother = "kim,jae,hun"; // 쉼표 있는경우
console.log(myBrother.split(",")); // 쉼표를 기준으로 구분됨
myBrother = "kim jaehun"; // 띄어쓰기
console.log(myBrother.split(" "));
console.log(myBrother.split(" ").reverse()); // reverse() 값 순서 역방향으로 바꿀때
console.log(myBrother.split(" ").join()); // join() 배열을 문자로 다시 만들때
console.log(myBrother.split(" ").join().replace(/,/g, "")); // replace() 문자로 만들어 생긴 쉼표 제거
console.log(myBrother.split(" ").join("")); // join("")빈값 넣으면 쉼표 안생김

// *
// toLowerCase() - 소문자 변환
// toUpperCase() - 대문자 변환
const alphabet = "AbCdefG";
console.log(alphabet.toLowerCase()); // 소문자변환
console.log(alphabet.toUpperCase()); // 대문자변환

// *
// trim() - 맨 앞이나 맨뒤 공백제거 - 중간x
const myAunt = "     leeshinwon       ";
console.log(myAunt);
console.log(myAunt.trim());
