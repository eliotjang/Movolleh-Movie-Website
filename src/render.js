import { openModal } from "./modal/modal.js";
import stateManager from "./state.js";
import { setupPaginationButtons, updatePageNumbers } from "./pagination/pagination.js";
// 새롭게 영화들을 렌더링 하기 이전에 페이지 초기화

const $movieList = document.querySelector(".movieList");
const $popularMovieList = document.querySelector(".popularmovieSection");
const $playingMovieList = document.querySelector(".playMovieSection");
const $topRateMovieList = document.querySelector(".topRateMovieSection");
export const renderMovieList = () => {
  $movieList.innerHTML = ""; // 이전 목록을 초기화
  //makeMovieList($movieList);
  makePlayingMovieList($playingMovieList);
  makePopularMovieList($popularMovieList);
  makeTopRateMovieList($topRateMovieList);
};

// export const makeSearchList = () => {
//   let state = stateManager.getState();
//   $movieList.innerHTML = "";
//   $popularMovieList.innerHTML = "";
//   $playingMovieList.innerHTML = "";
//   $topRateMovieList.innerHTML = "";
//   console.log(state.movieData);
//   state.movieData.forEach((movie) => {
//     const $movie = document.createElement("div");
//     $movie.className = "movie";
//     $movie.innerHTML = `
//         <img class='poster' src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
//         <h2 class='movieTitle'>${movie.title}</h2>
//       `;
//     $movie.id = movie.id;
//     $movieList.appendChild($movie);
//     $movie.addEventListener("click", () => {
//       window.location.href = `movieDetail.html?id=${movie.id}`;
//     });
//   });
//   updatePageNumbers();
// };
// 각 영화에 대한 HTML 요소를 생성
export const makeMovieList = () => {
  let state = stateManager.getState();
  switch (state.renderType) {
    case "movieList":
      stateManager.updateState({ movieData: state.topRatedData });
      stateManager.updateState({ total_pages: state.topRatedTotalPages });
      break;
    case "popularList":
      stateManager.updateState({ movieData: state.popularData });
      stateManager.updateState({ total_pages: state.popularTotalPages });
      break;
    case "playingList":
      stateManager.updateState({ movieData: state.playingData });
      stateManager.updateState({ total_pages: state.playingTotalPages });
      break;
    default:
      break;
  }

  state = stateManager.getState();

  console.log(state);

  $movieList.innerHTML = "";
  $popularMovieList.innerHTML = "";
  $playingMovieList.innerHTML = "";
  $topRateMovieList.innerHTML = "";
  state.movieData.forEach((movie) => {
    const $movie = document.createElement("div");
    $movie.className = "movie";

    let imagePath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `'./assets/no_img.jpg'`;
    $movie.innerHTML = `
        <img class='poster' src=${imagePath}/>
        <h2 class='movieTitle'>${movie.title}</h2>
      `;
    $movie.id = movie.id;
    $movieList.appendChild($movie);
    $movie.addEventListener("click", () => {
      window.location.href = `movieDetail.html?id=${movie.id}`;
    });
  });
  updatePageNumbers();
};
export const makePopularMovieList = ($container) => {
  const state = stateManager.getState();
  const $movieSection = document.createElement("section");
  $movieSection.className = "movieListRow";
  state.popularData.forEach((movie) => {
    const $movie = document.createElement("div");
    $movie.className = "movie";
    $movie.innerHTML = `
     <img class="renderPoster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
    <h2 class="movieTitle">${movie.title}</h2>
    `;

    $movie.id = movie.id;
    $movieSection.appendChild($movie);
    $movie.addEventListener("click", () => {
      window.location.href = `movieDetail.html?id=${movie.id}`;
    });
  });
  const loadMore = document.createElement("div");
  loadMore.innerHTML = "<button>더보기 →</button>";
  loadMore.className = "loadMore";
  loadMore.addEventListener("click", () => {
    stateManager.updateState({ renderType: "popularList" });
    makeMoreMovieList();
  });
  $movieSection.appendChild(loadMore);
  $container.appendChild($movieSection);
};

export const makePlayingMovieList = ($container) => {
  const state = stateManager.getState();
  const $movieSection = document.createElement("section");
  $movieSection.className = "movieListRow";
  state.playingData.forEach((movie) => {
    const $movie = document.createElement("div");
    $movie.className = "movie";
    $movie.innerHTML = `
     <img class="renderPoster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
    <h2 class="movieTitle">${movie.title}</h2>
    `;

    $movie.id = movie.id;
    $movieSection.appendChild($movie);
    $movie.addEventListener("click", () => {
      window.location.href = `movieDetail.html?id=${movie.id}`;
    });
  });
  const loadMore = document.createElement("div");
  loadMore.innerHTML = "<button>더보기 →</button>";
  loadMore.className = "loadMore";
  loadMore.addEventListener("click", () => {
    stateManager.updateState({ renderType: "playingList" });
    makeMoreMovieList();
  });
  $movieSection.appendChild(loadMore);
  $container.appendChild($movieSection);
};
export const makeTopRateMovieList = ($container) => {
  const state = stateManager.getState();
  const $movieSection = document.createElement("section");
  $movieSection.className = "movieListRow";
  state.topRatedData.forEach((movie) => {
    const $movie = document.createElement("div");
    $movie.className = "movie";
    $movie.innerHTML = `
     <img class="renderPoster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
    <h2 class="movieTitle">${movie.title}</h2>
    `;

    $movie.id = movie.id;
    $movieSection.appendChild($movie);
    $movie.addEventListener("click", () => {
      window.location.href = `movieDetail.html?id=${movie.id}`;
    });
  });
  const loadMore = document.createElement("div");
  loadMore.innerHTML = "<button>더보기 →</button>";
  loadMore.className = "loadMore";
  loadMore.addEventListener("click", () => {
    stateManager.updateState({ renderType: "movieList" });
    makeMoreMovieList();
  });
  $movieSection.appendChild(loadMore);
  $container.appendChild($movieSection);
};

const makeMoreMovieList = () => {
  $popularMovieList.innerHTML = "";
  $playingMovieList.innerHTML = "";
  $topRateMovieList.innerHTML = "";
  makeMovieList();
};
