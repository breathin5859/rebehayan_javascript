//  통신전용
const searchResult = (keyword) => {
  return fetch(`https://omdbapi.com/?apikey=ef297970&s=${keyword}`) // 네트워크상 open api 받아와서 . 사이트마다 고유 키가 있음(s=영화제목).
    .then((response) => response.json()) // 패치로 요청한거 jon화
    .then((response) => {
      // console.log(response.Search);
      return response.Search; // searchResult에 결과를 담음 => searchResult 밖으로 보내야해서 패치에 리턴
    });
};

// 돔전용
export const movieSearch = () => {
  // 2. 영화검색(클릭했을때)
  document.querySelector(".container button").addEventListener("click", () => {
    const keyword = document.querySelector(".container input").value;
    console.log(keyword);

    // 1. 패치로 받아와서 그리기
    searchResult(keyword).then((data) => {
      console.log(data);
      const movieItem = data.map((item) => {
        return /* html */ `
        <li>
          <img src=${item.Poster}>
          <strong style="font-size:20px; display=block;">${item.Title}</strong>
          <div style="font-size:14px;">개봉일 : ${item.Year}</div>
        </li>
        
      `;
      });
      
      console.log(movieItem);
      document.querySelector(".movie-list").innerHTML = movieItem.join("");
    });
  });
};

// 리턴은 함수 결과갑을 내보냄
