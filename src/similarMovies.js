import { fetchSimilarMoviesData } from "./tmdb-api/api.js";

// URL에서 영화 ID 추출
const similarMovieId = new URLSearchParams(window.location.search).get("id");

// 데이터 초기화 및 인덱스 초기화
let currentIndex = 0;
let data = [];

// 영화 데이터를 정렬하고 필터링하는 함수
const sortAndFilterMovies = (movies) => {
  return movies.filter((movie) => movie.poster_path && movie.overview).sort((a, b) => b.popularity - a.popularity);
};

// DOM 요소 선택
const moviesGrid = document.querySelector(".moviesGrid");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

// 유사 영화 출력 함수
const printSimilarMovies = () => {
  moviesGrid.innerHTML = "";
  const movieSubset = data.slice(currentIndex, currentIndex + 6);
  movieSubset.forEach((item) => {
    const movieCard = document.createElement("div");
    movieCard.className = "similarMovieCard";
    movieCard.id = item.id;
    movieCard.innerHTML = `<img src="https://image.tmdb.org/t/p/w200${item.poster_path}" alt="${item.title}"><h2 class='movieTitle'>${item.title}</h2>`;
    moviesGrid.appendChild(movieCard);
    movieCard.addEventListener("click", () => {
      window.location.href = `movieDetail.html?id=${item.id}`;
    });
  });
};

// 데이터 로딩 및 초기 표시
const initializeData = async () => {
  const response = await fetchSimilarMoviesData(similarMovieId);
  data = sortAndFilterMovies(response.results);
  //console.log(data); // 데이터 확인용
  //console.log(`상세 페이지 영화의 id => ${similarMovieId}`);
  //console.log(`첫 번째 추천 영화의 제목 => ${data[0].title}`);
  printSimilarMovies();
};

// 버튼 이벤트 처리
nextButton.addEventListener("click", () => {
  currentIndex += 6;
  if (currentIndex >= data.length) {
    currentIndex = 0; // 처음으로 리셋
  }
  printSimilarMovies();
});

prevButton.addEventListener("click", () => {
  currentIndex -= 6;
  if (currentIndex < 0) {
    currentIndex = Math.max(data.length - 6, 0);
  }
  printSimilarMovies();
});

initializeData();
