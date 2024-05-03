import { fetchDetailData } from "../tmdb-api/api.js";
// console.log(await fetchDetailData());

// 0# 영화 디테일 총괄 함수
export const detailCard = async () => {
  const fetchData = await fetchDetailData();
  getPoster(fetchData);
  getMovieTitle(fetchData);
  getMovieOverview(fetchData);
};

// 1# 포스터 이미지 넣는 함수
const getPoster = (fetchData) => {
  const posterPath = fetchData["poster_path"];
  let posterHTML = `
                <img class="posterImage" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}" />
            `;
  const posterIn = document.getElementById("moviePoster");
  posterIn.insertAdjacentHTML("BeforeEnd", posterHTML);
};

// 2# 영화 제목 넣는 함수
const getMovieTitle = (fetchData) => {
  const movieDetailTitle = fetchData["title"];
  let titleHTML = `${movieDetailTitle}`;
  const titleIn = document.getElementById("movieDetailTitle");
  titleIn.insertAdjacentHTML("BeforeEnd", titleHTML);
};

// 3# 영화 오버뷰 넣는 함수
const getMovieOverview = (fetchData) => {
  const movieOverview = fetchData["overview"];
  let overviewHTML = `${movieOverview}`;
  const overviewIn = document.getElementById("movieOverview");
  overviewIn.insertAdjacentHTML("BeforeEnd", overviewHTML);
};

detailCard(); // 총괄 함수 실행
