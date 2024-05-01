import { fetchData, searchData } from '../tmdb-api/api.js';
import { renderMovieList, makeMovieList } from '../render.js';
import { updatePageNumbers } from '../paination/pagination.js';
import { state } from '../state.js';

export const searchFunc = async (searchedString) => {
  if (searchedString) {
    try {
      state.currentSearchQuery = searchedString;
      state.currentPage = 1;
      const data = await searchData();
      state.movieData = data.results;
      state.total_pages = data.total_pages;
      if (state.movieData.length > 0) {
        renderMovieList();

        updatePageNumbers(); // 페이지네이션 업데이트
      } else {
        document.querySelector('.movieList').innerHTML =
          '<p>검색 결과가 없습니다.</p>';
        updatePageNumbers();
      }
    } catch (error) {
      console.error('검색 에러:', error);
    }
  } else {
    state.isSearching = false;
    try {
      state.currentPage = 1;
      state.currentSearchQuery = '';
      const data = await fetchData();
      state.movieData = data.results;
      state.total_pages = data.total_pages;
      if (state.movieData.length > 0) {
        renderMovieList();
        updatePageNumbers(); // 페이지네이션 업데이트
      } else {
        document.querySelector('.movieList').innerHTML =
          '<p>검색 결과가 없습니다.</p>';
      }
    } catch (error) {
      console.error('검색 에러:', error);
    }
  }
};
