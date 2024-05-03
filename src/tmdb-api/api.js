import { options } from "./option.js";
import stateManager from "../state.js";
export const fetchData = async () => {
  try {
    const state = stateManager.getState();
    const endpoint = state.isSearching
      ? `https://api.themoviedb.org/3/search/movie?query=${state.currentSearchQuery}&include_adult=true&language=en-US&page=${state.currentPage}`
      : `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${state.currentPage}`;

    const res = await fetch(endpoint, options);
    if (!res.ok) {
      throw new Error("에러발생!!");
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
export const searchData = async () => {
  stateManager.updateState({ isSearching: true });
  const state = stateManager.getState();

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${state.currentSearchQuery}&include_adult=true&language=en-US&page=${state.currentPage}`,
      options
    );
    if (!res.ok) {
      throw new Error("에러발생!!");
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const fetchSimilarMoviesData = async (similarMovieId) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${similarMovieId}/similar?language=ko-KR&page=1`,
      options
    );
    if (!res.ok) {
      throw new Error("에러발생!!");
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const fetchCreditData = async () => {
  try {
    const movieId = new URLSearchParams(location.search).get("id"); //URL에서 id값을 가져오는 방법!
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`, options);
    if (!res.ok) {
      throw new Error("에러발생!!");
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
