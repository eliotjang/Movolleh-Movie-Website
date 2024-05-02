const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjMyMGNmY2Y2ZDdhYTc3ZTQxNTg0YzAxMTI5MWRlOSIsInN1YiI6IjY2MjhiOGYwYWY5NTkwMDE2NDZhMTQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEQ6J5sg5aCUZhM6bXnDEXr4p4bqytNSjtucNb_sH3Y"
  }
};

let movie_id = "157336";
// 임시 (27205 = 인셉션, 157336 = 인터스텔라, 286217=마션, 49047=그래비티, 1111873=에비게일)

fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`, options)
  .then((response) => response.json())
  .then((response) => {
    const fetchData = response;
    let cast = fetchData["cast"];
    let crew = fetchData["crew"];

    // const orderedCast = cast.sort(function (a, b) {
    //   return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
    // });
    // console.log(crew); // 출연진은 정렬 완료

    const director = crew.filter((el) => {
      if (el.department === "Directing" && el.job === "Director") {
        return el;
      }
    });
    console.log(director);
  });
