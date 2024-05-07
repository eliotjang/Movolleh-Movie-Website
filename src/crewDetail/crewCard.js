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

  // 감독 출력
  let directornum = 0;
  let directorlist = [];
  for (let i = 0; i < director.length; i++) {
    for (let directorbreak in director) {
      if (typeof directorbreak.job == "undefined") {
        break;
      }
      if (directorbreak.job !== "director") {
        break;
      }
    }
    introduceDirector(director[i]);
    directorlist.push(director[i].name);
  }
  directornum = directorlist.length; // 감독 수에 따라 배우 수를 출력해야하므로 감독 수를 기억해둔다

  // 배우 출력
  let castnum = 0;
  do {
    introduceCast(cast[castnum]);
    castnum = castnum + 1;
  } while (castnum < 6 - directornum); // 감독 수에 따라 출력될 배우 수를 조정해준다
};

//
// 1# 감독(director) 소개카드 만들어서 붙이는 함수
const introduceDirector = (director) => {
  let profilePath = director.profile_path
    ? `https://www.themoviedb.org/t/p/w138_and_h175_bestv2${director.profile_path}`
    : `../../assets/nophoto.jpg`;
  let name = director.name;
  let job = director.job;
  let directorActorCardHTML = `
                <li class="director">
                  <img class="creditImage" src = ${profilePath} />
                  <p class="creditName">${name}</p>
                  <p class="character">${job}</p>
                </li>
        `;
  const directorActorCard = document.getElementById("directorActorCard");
  directorActorCard.insertAdjacentHTML("BeforeEnd", directorActorCardHTML);
};

// 2# 출연진(cast) 소개카드 만들어서 붙이는 함수
const introduceCast = (cast) => {
  let profilePath = cast.profile_path
    ? `https://www.themoviedb.org/t/p/w138_and_h175_bestv2${cast.profile_path}`
    : `../../assets/nophoto.jpg`;
  let name = cast.name;
  let character = cast.character;
  let castCardHTML = `
                <li class="actor">
                  <img class="creditImage" src="${profilePath}" />
                  <p class="creditName">${name}</p>
                  <p class="character">${character}</p>
                </li>
        `;
  const castCard = document.getElementById("directorActorCard");
  castCard.insertAdjacentHTML("BeforeEnd", castCardHTML);
};

// 페이지가 시작되면 카드가 출력되도록
introduceCard();
