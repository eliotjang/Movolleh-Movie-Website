import { fetchData, searchData } from "../tmdb-api/api.js";
import { renderMovieList, makeMovieList } from "../render.js";
import { updatePageNumbers } from "../pagination/pagination.js";
import stateManager from "../state.js";

export const searchFunc = async () => {
  const currentSearchQuery = stateManager.getState().currentSearchQuery;
  if (currentSearchQuery) {
    try {
      const data = await searchData();

      stateManager.updateState({
        currentPage: 1,
        movieData: data.results,
        total_pages: data.total_pages
      });

      const state = stateManager.getState();
      console.log(state);
      if (state.movieData.length > 0) {
        renderMovieList();

        updatePageNumbers(); // 페이지네이션 업데이트
      } else {
        document.querySelector(".movieList").innerHTML = "<p>검색 결과가 없습니다.</p>";
        updatePageNumbers();
      }
    } catch (error) {
      console.error("검색 에러:", error);
    }
  } else {
    try {
      stateManager.updateState({
        isSearching: false,
        currentPage: 1,
        currentSearchQuery: ""
      });
      const data = await fetchData();
      stateManager.updateState({
        movieData: data.results,
        total_pages: data.total_pages
      });
      const state = stateManager.getState();
      if (state.movieData.length > 0) {
        renderMovieList();
        updatePageNumbers(); // 페이지네이션 업데이트
      } else {
        document.querySelector(".movieList").innerHTML = "<p>검색 결과가 없습니다.</p>";
      }
    } catch (error) {
      console.error("검색 에러:", error);
    }
  }
};
