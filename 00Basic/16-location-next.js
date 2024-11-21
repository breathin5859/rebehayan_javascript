console.log(window.location);

const params = new URLSearchParams(window.location.search);
let obj = {};

console.log(params);
console.log(typeof params);

// params.forEach((value, key) => {
//   console.log(value, key);
//   obj[key] = value; //객체에 key를 추가하고 그에 대한 value을 설정한다.
// });

for (const [key, value] of params) {
  obj[key] = value;
}

console.log(obj);
