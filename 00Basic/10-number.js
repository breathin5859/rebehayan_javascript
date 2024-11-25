/* -------------------------------------------------------------------------- */
/*                                  표준내장객체 숫자                           */
/* -------------------------------------------------------------------------- */

// *
// toFixed() - 특정 소숫점까지 끊어줌
const number = 0.12345;
// console.log(number.toFixed(소숫점자릿수));
console.log(number.toFixed(1));
console.log(typeof number.toFixed(1));
// 타입 조회하면 문자로뜸 - 숫자였지만 toFixed 하면 문자로됨
console.log(Number(number.toFixed(1))); // number 함수로 숫자로 변경
console.log(typeof Number(number.toFixed(1))); // number 함수로 숫자로 변경
console.log(typeof parseFloat(number.toFixed(1))); // parseFloat 써도 숫자로 변함

// number / parseFloat 차이점

//
// toLocalesting - 숫자를 세자리 쉼표로 구분하여 끊어줌
const money = 123123123;
console.log(money.toLocaleString()); // - 금액 나타낼때 사용
console.log(`${money.toLocaleString()}원`);

//
// Number.isInteger- 숫자가 정수인지 소수인지 알아볼수 있음
const number2 = 1000;
console.log(Number.isInteger(number2)); // true, 소수면 false
