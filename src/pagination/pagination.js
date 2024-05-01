import { fetchData } from '../tmdb-api/api.js';
import { state } from '../state.js';

import { renderMovieList } from '../render.js';

export const setupPaginationButtons = () => {
  const firstPage = document.getElementById('firstPage');
  firstPage.style.display = state.currentPage === 1 ? 'none' : 'block';

  const prevPage = document.getElementById('prev');
  prevPage.style.display = state.currentPage === 1 ? 'none' : 'block';

  const lastPage = document.getElementById('lastPage');
  lastPage.style.display =
    state.currentPage === state.total_pages ? 'none' : 'block';

  const nextPage = document.getElementById('next');
  nextPage.style.display =
    state.currentPage === state.total_pages ? 'none' : 'block';

  firstPage.onclick = () => goToPage(1);
  prevPage.onclick = () => goToPage(state.currentPage - 1);
  nextPage.onclick = () => goToPage(state.currentPage + 1);
  lastPage.onclick = () => goToPage(state.total_pages);
};
export const updatePageNumbers = () => {
  const pageNumberContainer = document.getElementById('pageNumberContainer');
  pageNumberContainer.innerHTML = ''; // 기존 페이지네이션 버튼 삭제

  // 시작 페이지 번호 계산 (현재 페이지를 중심으로, 최대 5개의 페이지 번호 표시)
  let startPage = Math.max(state.currentPage - 2, 1);
  let endPage = Math.min(startPage + 4, state.total_pages);

  generatePageButtons(startPage, endPage, pageNumberContainer);
  setupPaginationButtons(state.currentPage, state.total_pages);
};
const generatePageButtons = (startPage, endPage, pageNumberContainer) => {
  for (let pageNum = startPage; pageNum <= endPage; pageNum++) {
    createPageButton(pageNum, pageNumberContainer);
  }
};
// 페이지네이션 번호를 업데이트하는 함수
const createPageButton = (pageNum, pageNumberContainer) => {
  const pageButton = document.createElement('button');
  pageButton.innerText = pageNum;
  pageButton.className = 'pageButton';
  if (state.currentPage === pageNum) {
    pageButton.style.backgroundColor = '#e50914';
  }
  pageButton.onclick = async () => {
    state.currentPage = pageNum;
    const data = await fetchData();
    state.movieData = data.results;
    if (data) {
      renderMovieList();
      updatePageNumbers();
    }
  };
  pageNumberContainer.appendChild(pageButton);
};

// //각 영화에 대한 HTML 요소를 생성

const goToPage = async (pageNumber) => {
  if (
    pageNumber >= 1 &&
    pageNumber <= state.total_pages &&
    pageNumber !== state.currentPage
  ) {
    state.currentPage = pageNumber;
    const data = await fetchData();
    if (data) {
      state.movieData = data.results;
      renderMovieList();
      updatePageNumbers();
      setupPaginationButtons();
    }
  }
};
