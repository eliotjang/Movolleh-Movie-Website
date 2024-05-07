# Movolleh-Movie-Website

영화 추천 사이트 입니다.

## Website Link

- [Movolleh-Movie-Website]()

## Layout

### 랜딩 페이지

- 헤더 : 클릭 시 홈으로 이동하는 홈(MOVOLLEH) 버튼, 웹 페이지를 제작한 팀을 소개하는 Credit 버튼, 영화를 검색할 수 있는 검색 창으로 구성되어 있습니다.
- 팀 소개글 : 웹 페이지를 소개하는 곳입니다.
- 영화 목록 : 인기 영화 순으로 나열되어 있으며, 검색 결과로 나타난 영화들이 나열됩니다.

### 상세 페이지

- 헤더 : 클릭 시 홈으로 이동하는 X(ANVOLLEH) 버튼으로 구성되어 있습니다.
- 좌측 : 검색된 영화에 대한 상세 정보 (영화 포스터, 제목, 내용 요약, 감독 및 출연진)와 리뷰를 나타냅니다.
- 우측 : 검색된 영화를 기반으로 한 추천 영화들이 나열됩니다.

## Features

- 바닐라 JS 사용
- TMDB Open API 이용
  - Now Playing API, Popular API, Top Rated API, Details API, Credits API, Similar API
- 영화 정보 상세 페이지 구현
- 상세 페이지 영화 리뷰 작성 기능 구현
- UX를 고려한 validation check
- 하기 기재된 JavaScript 문법 요소 이용하여 구현
  - ...
- 페이지네이션 기능 구현
- CSS 반응형 UI 구현

## Skills

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<img  src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

<img  src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

## Project Configuration

<details>
  <summary>src : JavaScript 폴더입니다.</summary>
  <div markdown="1">
    <ul>
      <li>crewDetail : 상세 페이지 좌측의 영화에 대한 상세 정보를 나타냅니다.</li>
      <li>modal.js</li>
      <li>pagination.js : 랜딩 페이지 하단의 페이지 버튼을 이용하여 원하는 페이지로 이동할 수 있는 기능이 구현되어 있습니다.</li>
      <li>review.js : 상세 페이지 좌측 하단의 리뷰 작성 기능이 구현되어 있습니다.</li>
      <li>search.js</li>
      <li>tmdb-api : TMDB API 요청을 처리합니다.</li>
      <li>main.js</li>
      <li>render.js</li>
      <li>similarMovies.js : 상세 페이지 우측의 검색된 영화를 기반으로 한 추천 영화 목록을 나타냅니다.</li>
      <li>state.js</li>
    </ul>
  </div>
</details>

<br>

<details>
  <summary>style : CSS 폴더입니다.</summary>
  <div markdown="1">
    <ul>
      <li>credit.css : 팀 소개 페이지 CSS 스타일 시트입니다.</li>
      <li>index.css : 랜딩 페이지 CSS 스타일 시트입니다.</li>
      <li>movieDetail.css : crewDetail의 CSS 스타일 시트입니다.</li>
      <li>reset.css</li>
      <li>review.css : review.js의 CSS 스타일 시트입니다.</li>
      <li>similarMoviesStyle.css : similarMovies.js의 CSS 스타일 시트입니다.</li>
    </ul>
  </div>
</details>

<br>

[credit.html](https://github.com/eliotjang/Movolleh-Movie-Website/blob/dev/credit.html) : 웹 페이지를 제작한 팀 소개 페이지 HTML 파일입니다.

[index.html](https://github.com/eliotjang/Movolleh-Movie-Website/blob/dev/index.html) : 메인 HTML 파일입니다.

[movieDetail.html](https://github.com/eliotjang/Movolleh-Movie-Website/blob/dev/movieDetail.html) : 영화 상세 페이지 HTML 파일입니다.

## Reference

- [TMDB Now Playing API](https://developer.themoviedb.org/reference/movie-now-playing-list)
- [TMDB Popular API](https://developer.themoviedb.org/reference/movie-popular-list)
- [TMDB Top Rated API](https://developer.themoviedb.org/reference/movie-top-rated-list)
- [TMDB Details API](https://developer.themoviedb.org/reference/movie-details)
- [TMDB Credits API](https://developer.themoviedb.org/reference/movie-credits)
- [TMDB Similar API](https://developer.themoviedb.org/reference/movie-similar)

## 팀 프로젝트 설계 회의록

[팀 프로젝트 설계](https://eliotjang.notion.site/2a89927e3bc74e07b317adfa440ee9ea)

## 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/eliotjang"><img src="https://ca.slack-edge.com/T06B9PCLY1E-U06UASA7JE8-9f39c84302c0-512" width="100px;" alt="장성원"/><br /><sub><b> 팀장 : 장성원 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/9r3dflam3"><img src="https://ca.slack-edge.com/T06B9PCLY1E-U06UH5H6ASC-184194feba5f-51" width="100px;" alt="구남욱"/><br /><sub><b> 팀원 : 구남욱 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/CDR4733"><img src="https://ca.slack-edge.com/T06B9PCLY1E-U06LCPXFZPG-711e64fb68c5-512" width="100px;" alt="석한솔"/><br /><sub><b> 팀원 : 석한솔 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/KAPUIST"><img src="https://ca.slack-edge.com/T06B9PCLY1E-U06U0D3HBUZ-0a269006683b-512" width="100px;" alt="손태권"/><br /><sub><b> 팀원 : 손태권 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/xszvvfm"><img src="https://ca.slack-edge.com/T06B9PCLY1E-U06M777LMDW-ge8be5c10c59-192" width="100px;" alt="방채은"/><br /><sub><b> 팀원 : 방채은 </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## 역할 분담

### 장성원

### 구남욱

### 석한솔

### 손태권

### 방채은
