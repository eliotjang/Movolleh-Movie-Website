import { fetchData, searchData } from "../tmdb-api/api.js";
import { renderMovieList, makeMovieList } from "../render.js";
import { updatePageNumbers } from "../pagination/pagination.js";
import stateManager from "../state.js";
import { movieFilter } from "../pagination/pagination.js";
export const searchFunc = async () => {
  const currentSearchQuery = stateManager.getState().currentSearchQuery;
  if (currentSearchQuery) {
    console.log(currentSearchQuery);
    try {
      let data = await searchData();
      let total_pages = data.total_pages;
      data = movieFilter(data);
      console.log(data);
      stateManager.updateState({
        currentPage: 1,
        movieData: data,
        total_pages,
        renderType: "searchList"
      });

      const state = stateManager.getState();
      console.log(state);
      if (state.movieData.length > 0) {
        makeMovieList();
        updatePageNumbers(); // 페이지네이션 업데이트
      } else {
        document.querySelector(".movieList").innerHTML = "<p>검색 결과가 없습니다.</p>";
        updatePageNumbers();
      }
    } catch (error) {
      console.error("검색 에러:", error);
    }
  }
};
