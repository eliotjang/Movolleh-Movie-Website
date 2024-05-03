import { fetchCreditData } from "../tmdb-api/api.js";

// 0# 소개카드 만들기 총괄 수행 함수
export const introduceCard = async () => {
  const fetchData = await fetchCreditData();
  const crew = fetchData["crew"]; // fetchData에서 제작진(crew)
  const cast = fetchData["cast"]; // fetchData에서 출연진(cast)
  const director = crew.filter((v) => {
    if (v.job === "Director") {
      return v; // 제작진(crew) 중에서 감독을 찾아서 할당
    }
  });
  for (let i = 0; i < 5; i++) {
    if (director.length > i) {
      introduceDirector(director[i]); // 1번함수 실행
    }
    introduceCast(cast[i]); // 2번함수 실행
  }
};

// 1# 감독(director) 소개카드 만들어서 붙이는 함수
const introduceDirector = (director) => {
  let profilePath = director.profile_path;
  let name = director.name;
  let job = director.job;
  let directorCardHTML = `
                <li class="director">
                  <img class="creditImage" src="https://www.themoviedb.org/t/p/w138_and_h175_bestv2${profilePath}" />
                  <p class="creditName">${name}</p>
                  <p class="character">${job}</p>
                </li>
        `;
  const directorCard = document.getElementById("directorCard");
  directorCard.insertAdjacentHTML("BeforeEnd", directorCardHTML);
};

// 2# 출연진(cast) 소개카드 만들어서 붙이는 함수
const introduceCast = (cast) => {
  let profilePath = cast.profile_path;
  let name = cast.name;
  let character = cast.character;
  let castCardHTML = `
                <li class="actor">
                  <img class="creditImage" src="https://www.themoviedb.org/t/p/w138_and_h175_bestv2${profilePath}" />
                  <p class="creditName">${name}</p>
                  <p class="character">${character}</p>
                </li>
        `;
  const castCard = document.getElementById("directorCard");
  castCard.insertAdjacentHTML("BeforeEnd", castCardHTML);
};

// 페이지가 시작되면 카드가 출력되도록
introduceCard();
