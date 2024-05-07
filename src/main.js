import { fetchData, fetchPlayingData, fetchPopularData } from "./tmdb-api/api.js";

import { renderMovieList, makeMovieList } from "./render.js";
import { searchFunc } from "./search/search.js";
//파일간에 상태유지를 위해서 선언.
//import { state } from './state.js';
import stateManager from "./state.js";

// 페이지 로드 시 초기 데이터 로딩과 페이지네이션 설정
window.addEventListener("load", async () => {
  await loadPageSectionData();
  //await loadPageData(); // 페이지 데이터 로드 및 렌더링
  //setupPaginationButtons(); // 페이지네이션 버튼 설정
});
const loadPageSectionData = async () => {
  const popularData = await fetchPopularData();
  const playingData = await fetchPlayingData();
  const topRatedData = await fetchData();
  if (popularData && playingData && topRatedData) {
    stateManager.updateState({ playingData: playingData.results, playingTotalPages: playingData.total_pages });
    stateManager.updateState({ popularData: popularData.results, popularTotalPages: popularData.total_pages });
    stateManager.updateState({ topRatedData: topRatedData.results, topRatedTotalPages: topRatedData.total_pages });
    renderMovieList();
  }
};

const $searchMovie = document.querySelector(".searchMovie");
$searchMovie.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(1);
  const searchedString = e.target["search"].value.toUpperCase();
  stateManager.updateState({ currentSearchQuery: searchedString });
  searchFunc();
});
