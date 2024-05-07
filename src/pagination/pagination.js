import { fetchData, fetchPlayingData, fetchPopularData } from "../tmdb-api/api.js";
import stateManager from "../state.js";

import { renderMovieList, makeMovieList } from "../render.js";

export const setupPaginationButtons = () => {
  const state = stateManager.getState();

  const firstPage = document.getElementById("firstPage");
  const prevPage = document.getElementById("prev");
  const lastPage = document.getElementById("lastPage");
  const nextPage = document.getElementById("next");

  firstPage.style.display = state.currentPage === 1 ? "none" : "block";
  prevPage.style.display = state.currentPage === 1 ? "none" : "block";
  lastPage.style.display = state.currentPage === state.total_pages ? "none" : "block";
  nextPage.style.display = state.currentPage === state.total_pages ? "none" : "block";

  firstPage.onclick = () => goToPage(1);
  prevPage.onclick = () => goToPage(state.currentPage - 1);
  nextPage.onclick = () => goToPage(state.currentPage + 1);
  lastPage.onclick = () => goToPage(state.total_pages);
};
export const updatePageNumbers = () => {
  const state = stateManager.getState();
  const pageNumberContainer = document.getElementById("pageNumberContainer");
  const pageNumberBtn = document.querySelector(".pagination");
  pageNumberBtn.style.display = "flex";
  pageNumberContainer.innerHTML = ""; // 기존 페이지네이션 버튼 삭제

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
  const state = stateManager.getState();
  const pageButton = document.createElement("button");
  pageButton.innerText = pageNum;
  pageButton.className = "pageButton";
  if (state.currentPage === pageNum) {
    pageButton.style.backgroundColor = "#e50914";
  }
  pageButton.onclick = async () => {
    await goToPage(pageNum);
  };
  pageNumberContainer.appendChild(pageButton);
};

// //각 영화에 대한 HTML 요소를 생성

const goToPage = async (pageNumber) => {
  const state = stateManager.getState();
  if (pageNumber >= 1 && pageNumber <= state.total_pages && pageNumber !== state.currentPage) {
    stateManager.updateState({ currentPage: pageNumber });
    console.log(state.renderType);
    let data = "";
    switch (state.renderType) {
      case "movieList":
        data = await fetchData();
        stateManager.updateState({ topRatedData: data.results });

      case "popularList":
        data = await fetchPlayingData();
        stateManager.updateState({ popularData: data.results });

      case "playingList":
        data = await fetchPlayingData();
        stateManager.updateState({ playingData: data.results });

      default:
        data = await fetchData();
        stateManager.updateState({ movieData: data.results });
    }
    makeMovieList();
    updatePageNumbers();
    setupPaginationButtons();
  }
};
