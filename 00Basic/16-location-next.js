// console.log(window.location);

const params = new URLSearchParams(window.location.search);
// location의 search영역(color=blue&size=20) 키값 URLSearchParams 메서드 이용해 객체화
let obj = {}; // 빈객체 (재할당위해 let)

// console.log(params); //  params조회하면 2나옴. 요걸로는 뭘 할수 없음 데이더 조회해야하는데 접근하려면 반드시 forEach.
// console.log(typeof params);

params.forEach((value, key) => {
  // console.log(value, key); // 인덱스 값을 반환하는개 아니라 URLSearchParams로 파라미터 값을 변환한것을 조회해 키 키값 받을 수 있음. 이걸가지고 빈객체에 넣어주는 작업 해야함
  obj[key] = value; //객체에 key를 추가하고 그에 대한 value을 설정한다. - 객체에 담김

  // .(점)표기법 이용해 객체에 키와 값 등록 할 수 있었는데 (-> obj.name = hoi)
  // 객체를 등록하는 방식 두가지  .표기법, []대괄호 표기법
  // [](대괄호)표기법은 동적으로 생성된것은 대괄표 표기법으로만 추가가능
  // 점 표기법은 이미 생성된 객체를 가지고 했기때문에 가능.
});

// for (const [key, value] of params) {
//   obj[key] = value;
// }

console.log(obj); // 객체됨 확인 

document.querySelector("h2").style.cssText = `
color:${obj.color}; 
font-size:${obj.size}px;
`;
// 이미 객체된것은 점 표기법으로 
// 없는 데이터 추가할때만 대괄호, 접근은 점표기법으로  
