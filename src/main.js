import { fetchData, searchData } from "./tmdb-api/api.js";
import { setupPaginationButtons, updatePageNumbers } from "./pagination/pagination.js";
import { renderMovieList, makeMovieList } from "./render.js";
import { searchFunc } from "./search/search.js";
//파일간에 상태유지를 위해서 선언.
//import { state } from './state.js';
import stateManager from "./state.js";

// 페이지 로드 시 초기 데이터 로딩과 페이지네이션 설정
window.addEventListener("load", async () => {
  await loadPageData(); // 페이지 데이터 로드 및 렌더링
  setupPaginationButtons(); // 페이지네이션 버튼 설정
});
const loadPageData = async () => {
  const data = await fetchData();
  if (data) {
    stateManager.updateState({ total_pages: data.total_pages });
    stateManager.updateState({ movieData: data.results });
    renderMovieList();
    updatePageNumbers();
  }
};

const $searchMovie = document.querySelector(".searchMovie");
$searchMovie.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchedString = e.target["search"].value.toUpperCase();
  stateManager.updateState({ currentSearchQuery: searchedString });
  searchFunc();
});
