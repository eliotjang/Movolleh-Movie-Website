import { fetchSimilarMoviesData } from "./tmdb-api/api.js";

// URL Query String
const similarMovieId = new URLSearchParams(location.search).get("id");
// TMDB - Similar open API 사용
const data = await fetchSimilarMoviesData(similarMovieId);

// URI에서 Similar 영화 id, fetch data 확인용 콘솔 출력
console.log(`상세 페이지 영화의 id => ${similarMovieId}`);
console.log(`첫 번째 추천 영화의 제목 => ${data.results[0].title}`);
console.log(data);

// 상세 페이지 우측 class
const moviesGrid = document.querySelector(".moviesGrid");

let printSimilarMovies = (data) => {
  let countValidCard = 0;
  for (let i = 0; i < 6; i++) {
    // poster_path가 null, overview가 빈 문자열인 경우 처리
    const checkValidPoster = data.results[countValidCard].poster_path;
    const checkValidOverview = data.results[countValidCard].overview;
    if (checkValidPoster === null || checkValidOverview === "") {
      i--;
    } else {
      // 영화 카드 div 구분
      const similarMovieCard = document.createElement("div");
      similarMovieCard.className = "similarMovieCard";
      similarMovieCard.dataset.movieId = data.results[countValidCard].id;
      similarMovieCard.innerHTML = `
          <h2 class='movieTitle'>${data.results[countValidCard].title}</h2>
        `;

      moviesGrid.appendChild(similarMovieCard);

      // div로 구분된 영화 카드 img 삽입
      const similarMovieCardImg = document.createElement("img");
      similarMovieCardImg.setAttribute("src", `https://image.tmdb.org/t/p/w200${checkValidPoster}`);
      similarMovieCard.prepend(similarMovieCardImg);
    }
    countValidCard++;
  }

  // 추천 영화 카드 클릭 시 해당 영화 상세 페이지 이동
  const similarMovieCards = document.querySelectorAll(".similarMovieCard");
  similarMovieCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      window.location.href = `movieDetail.html?id=${card.dataset.movieId}`;
    });
  });
};

printSimilarMovies(data);
