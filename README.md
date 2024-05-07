# Movolleh-Movie-Website

**순수 바닐라 자바스크립트**만을 사용하여 구현한 영화 추천 사이트 입니다. 아래 링크는 배포 링크입니다.

- [Movolleh-Movie-Website]()

## 🍓 Layout

### 랜딩 페이지

- 헤더 : 클릭 시 홈으로 이동하는 홈(MOVOLLEH) 버튼, 웹 페이지를 제작한 팀을 소개하는 Credit 버튼, 영화를 검색할 수 있는 검색 창으로 구성되어 있습니다.
- 팀 소개글 : 웹 페이지를 소개하는 곳입니다.
- 영화 목록 : 인기 영화 순으로 나열되어 있으며, 검색 결과로 나타난 영화들이 나열됩니다.

### 상세 페이지

- 헤더 : 클릭 시 홈으로 이동하는 X(ANVOLLEH) 버튼으로 구성되어 있습니다.
- 좌측 : 검색된 영화에 대한 상세 정보 (영화 포스터, 제목, 내용 요약, 감독 및 출연진)와 리뷰를 나타냅니다.
- 우측 : 검색된 영화를 기반으로 한 추천 영화들이 나열됩니다.

## 🥝 프로젝트 평가 항목

### 1. **필수 조건**

- [x] 바닐라 자바스크립트 사용하기
- [x] Github Pull Request를 사용한 협업
- [x] const와 let만을 이용한 변수 선언 필수
- [x] TMDB OPEN API 이용

### 2. **필수 기능**

- [x] 영화정보 상세 페이지 구현
  - [x] 카드 리스트에서 카드 선택시, 상세 페이지로 이동
  - [x] 상세 페이지에서 메인 페이지로 이동하는 UI 구현
- [x] 상세 페이지 영화 리뷰 작성 기능 구현
  - [x] 특정 영화에 대해 의견을 작성할 수 있는 UI 구현
    - [x] 작성자, 리뷰, 확인비밀번호를 입력하도록 구현
  - [x] 작성한 정보는 localStorage에 적재하도록 구현
  - [x] UX를 고려한 validation check
    - [x] 리뷰 수정 및 삭제 기능 구현 (선택)

### 3. **필수 문법 구현 목록**

<details markdown="1">
  <summary>crewCard.js</summary>
  <div>
    <ul>
      <li>연산자</li>
        <ul>
          <li>논리부정(!), 타입(typeof) 사용</li>
        </ul>
      <li>화살표 함수</li>
        <ul>
          <li>일반 화살표 함수 사용</li>
        </ul>
        <ul>
          <li>매개변수가 1개인 화살표 함수 사용</li>
        </ul>
      <li>조건문</li>
        <ul>
          <li>if문</li>
        </ul>
      <li>반복문</li>
        <ul>
          <li>일반 for문 사용</li>
        </ul>
        <ul>
          <li>for...in문 사용</li>
        </ul>
        <ul>
          <li>do...while문 사용</li>
        </ul>
        <ul>
          <li>반복 제어 명령문 break문 사용</li>
        </ul>
      <li>배열</li>
        <ul>
          <li>push</li>
        </ul>
        <ul>
          <li>filter</li>
        </ul>
      <li>DOM 제어 : getElementById 사용</li>
      <li>module : import, export</li>
      <li>undefined를 활용한 '없는 값'에 대한 처리</li>
    </ul>
  </div>
</details>

<details markdown="1">
  <summary>movieDetail.js</summary>
  <div>
    <ul>
      <li>화살표 함수</li>
        <ul>
          <li>일반 화살표 함수 사용</li>
        </ul>
        <ul>
          <li>매개변수가 1개인 화살표 함수 사용</li>
        </ul>
      <li>DOM 제어 : getElementById 사용</li>
      <li>module : import, export</li>
    </ul>
  </div>
</details>

<details markdown="1">
  <summary>modal.js</summary>
  <div>
    <ul>
      <li>화살표 함수</li>
        <ul>
          <li>일반 화살표 함수 사용</li>
        </ul>
        <ul>
          <li>매개변수가 1개인 화살표 함수 사용</li>
        </ul>
      <li>조건문</li>
        <ul>
          <li>if문, if-else문</li>
        </ul>
      <li>DOM 제어 : getElementById, addEventListener 사용</li>
      <li>module : import, export</li>
    </ul>
  </div>
</details>

<details markdown="1">
  <summary>pagination.js</summary>
  <div>
    <ul>
      <li>연산자</li>
        <ul>
          <li>논리곱(&&), 논리부정(!), 삼항연산자(?:) 사용</li>
        </ul>
      <li>화살표 함수</li>
        <ul>
          <li>일반 화살표 함수 사용</li>
        </ul>
        <ul>
          <li>매개변수가 1개인 화살표 함수 사용</li>
        </ul>
      <li>조건문</li>
        <ul>
          <li>if문</li>
        </ul>
      <li>반복문</li>
        <ul>
          <li>일반 for문 사용</li>
        </ul>
      <li>DOM 제어 : getElementById, innerHTML 사용</li>
      <li>module : import, export</li>
    </ul>
  </div>
</details>

<details markdown="1">
  <summary>review.js</summary>
  <div>
    <ul>
      <li>화살표 함수</li>
        <ul>
          <li>일반 화살표 함수 사용</li>
        </ul>
        <ul>
          <li>매개변수가 1개인 화살표 함수 사용</li>
        </ul>
      <li>조건문</li>
        <ul>
          <li>if문</li>
        </ul>
      <li>반복문</li>
        <ul>
          <li>일반 for문 사용</li>
        </ul>
        <ul>
          <li>for...in문 사용</li>
        </ul>
        <ul>
          <li>do...while문 사용</li>
        </ul>
        <ul>
          <li>반복 제어 명령문 break문 사용</li>
        </ul>
      <li>DOM 제어 : querySelector, addEventListener, innerHTML, appendChild 사용</li>
      <li>module : import, export</li>
    </ul>
  </div>
</details>

<details markdown="1">
  <summary>search.js</summary>
  <div>
    <ul>
      <li>화살표 함수</li>
        <ul>
          <li>일반 화살표 함수 사용</li>
        </ul>
      <li>조건문</li>
        <ul>
          <li>if문, if-else문</li>
        </ul>
      <li>DOM 제어 : querySelector, innerHTML 사용</li>
      <li>module : import, export</li>
    </ul>
  </div>
</details>

<details markdown="1">
  <summary>api.js</summary>
  <div>
    <ul>
      <li>연산자</li>
        <ul>
          <li>삼항연산자(?:) 사용</li>
        </ul>
      <li>화살표 함수</li>
        <ul>
          <li>일반 화살표 함수 사용</li>
        </ul>
        <ul>
          <li>매개변수가 1개인 화살표 함수 사용</li>
        </ul>
      <li>조건문</li>
        <ul>
          <li>if문</li>
        </ul>
      <li>module : import, export</li>
    </ul>
  </div>
</details>

<details markdown="1">
  <summary>main.js</summary>
  <div>
    <ul>
      <li>화살표 함수</li>
        <ul>
          <li>일반 화살표 함수 사용</li>
        </ul>
        <ul>
          <li>매개변수가 1개인 화살표 함수 사용</li>
        </ul>
      <li>조건문</li>
        <ul>
          <li>if문</li>
        </ul>
      <li>DOM 제어 : addEventListener 사용</li>
      <li>module : import</li>
    </ul>
  </div>
</details>

<details markdown="1">
  <summary>render.js</summary>
  <div>
    <ul>
      <li>화살표 함수</li>
        <ul>
          <li>일반 화살표 함수 사용</li>
        </ul>
        <ul>
          <li>매개변수가 1개인 화살표 함수 사용</li>
        </ul>
      <li>반복문</li>
        <ul>
          <li>forEach문</li>
        </ul>
      <li>DOM 제어 : querySelector, innerHTML, addEventListener, window.location.href 사용</li>
      <li>module : import, export</li>
    </ul>
  </div>
</details>

<details markdown="1">
  <summary>similarMovies.js</summary>
  <div>
    <ul>
      <li>화살표 함수</li>
        <ul>
          <li>일반 화살표 함수 사용</li>
        </ul>
        <ul>
          <li>매개변수가 1개인 화살표 함수 사용</li>
        </ul>
      <li>조건문</li>
        <ul>
          <li>if문</li>
        </ul>
      <li>반복문</li>
        <ul>
          <li>forEach문</li>
        </ul>
      <li>배열</li>
        <ul>
          <li>slice</li>
        </ul>
      <li>DOM 제어 : querySelector, getElementById, addEventListener, appendChild 사용</li>
      <li>module : import, export</li>
    </ul>
  </div>
</details>

### 4. **선택 기능**

- [x] CSS
  - [x] flex 사용하기
  - [x] grid 사용하기
  - [x] 반응형 UI 구성하기
- [x] 상세페이지 - 리뷰 수정 및 삭제 기능 구현
- [x] 메인페이지 - 조건에 맞는 카드 리스트 정렬 기능

## 🥕 Skills

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<img  src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

<img  src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

## 🍋 Project Configuration

<details>
  <summary>src : JavaScript 폴더입니다.</summary>
  <div markdown="1">
    <ul>
      <li>crewDetail : 상세 페이지 좌측의 영화에 대한 상세 정보를 나타냅니다.</li>
      <li>modal.js : 상세 페이지 좌측 하단의 리뷰 작성 기능에 구현된 모달 창 기능입니다.</li>
      <li>pagination.js : 랜딩 페이지 하단의 페이지 버튼을 이용하여 원하는 페이지로 이동할 수 있는 기능이 구현되어 있습니다.</li>
      <li>review.js : 상세 페이지 좌측 하단의 리뷰 작성 기능이 구현되어 있습니다.</li>
      <li>search.js : 랜딩 페이지 우측 상단의 검색 기능이 구현되어 있습니다.</li>
      <li>tmdb-api : TMDB API 요청을 처리합니다.</li>
      <li>main.js : 메인 JS 파일입니다.</li>
      <li>render.js : 랜딩 페이지에서 영화들을 새롭게 렌더링 하기 이전에 페이지를 초기화 하는 기능이 구현되어 있습니다.</li>
      <li>similarMovies.js : 상세 페이지 우측의 검색된 영화를 기반으로 한 추천 영화 목록을 나타냅니다.</li>
      <li>state.js : </li>
    </ul>
  </div>
</details>

<details>
  <summary>style : CSS 폴더입니다.</summary>
  <div markdown="1">
    <ul>
      <li>credit.css : 팀 소개 페이지 CSS 스타일 시트입니다.</li>
      <li>index.css : 랜딩 페이지 CSS 스타일 시트입니다.</li>
      <li>movieDetail.css : crewDetail의 CSS 스타일 시트입니다.</li>
      <li>review.css : review.js의 CSS 스타일 시트입니다.</li>
      <li>similarMoviesStyle.css : similarMovies.js의 CSS 스타일 시트입니다.</li>
    </ul>
  </div>
</details>

[credit.html](https://github.com/eliotjang/Movolleh-Movie-Website/blob/dev/credit.html) : 웹 페이지를 제작한 팀 소개 페이지 HTML 파일입니다.

[index.html](https://github.com/eliotjang/Movolleh-Movie-Website/blob/dev/index.html) : 메인 HTML 파일입니다.

[movieDetail.html](https://github.com/eliotjang/Movolleh-Movie-Website/blob/dev/movieDetail.html) : 영화 상세 페이지 HTML 파일입니다.

## ⛱️ Reference

- [TMDB Now Playing API](https://developer.themoviedb.org/reference/movie-now-playing-list)
- [TMDB Popular API](https://developer.themoviedb.org/reference/movie-popular-list)
- [TMDB Top Rated API](https://developer.themoviedb.org/reference/movie-top-rated-list)
- [TMDB Details API](https://developer.themoviedb.org/reference/movie-details)
- [TMDB Credits API](https://developer.themoviedb.org/reference/movie-credits)
- [TMDB Similar API](https://developer.themoviedb.org/reference/movie-similar)

## 🍇 팀 프로젝트 설계 회의록

[팀 프로젝트 설계](https://eliotjang.notion.site/2a89927e3bc74e07b317adfa440ee9ea)

## 🍒 팀원 소개

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

## 🍑 역할 분담

### 장성원

### 구남욱

### 석한솔

### 손태권

### 방채은
