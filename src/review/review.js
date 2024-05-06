const similarMovieId = new URLSearchParams(location.search).get("id");

const controlReview = () => {
  addTable();

  const writeBtn = document.querySelector(".writeBtn");
  writeBtn.addEventListener("click", () => {
    addLocalStorage();
    location.reload(true);
  });

  printReview();
};

let addTable = () => {
  const reviewContent = document.querySelector(".reviewContent");
  const reviewTable = document.createElement("table");
  reviewTable.className = "reviewTable";
  reviewTable.innerHTML = `
  <table class="reviewTable">
    <tr>
      <td><input class="reviewText" type="text" placeholder="리뷰 내용 (최대 30자)" size=55 maxlength=30 /></td>
      <td><input class="writer" type="text" placeholder="작성자" size=5 /></td>
      <td>
        <select class="ratingStar">
          <option value = "none">별점</option>
          <option value = "☆">☆</option>
          <option value = "☆☆">☆☆</option>
          <option value = "☆☆☆">☆☆☆</option>
          <option value = "☆☆☆☆">☆☆☆☆</option>
          <option value = "☆☆☆☆☆">☆☆☆☆☆</option>
        </select>
      </td>
      <td><button class="writeBtn" type="button">작성</button></td>
    </tr>
  </table>
  `;
  reviewContent.appendChild(reviewTable);
};

let addLocalStorage = () => {
  const reviewText = document.querySelector(".reviewText").value;
  const writer = document.querySelector(".writer").value;
  const ratingStar = document.querySelector(".ratingStar").value;
  //const reviewPassword = document.querySelector(".reviewPassword").value;

  const passwordPrompt = prompt(`${writer}님 안녕하세요, 비밀번호를 지정해주세요.`, "8자 이상, 특수문자 포함");
  const reviewPassword = passwordPrompt;
  const reviewArrJson = JSON.stringify([reviewText, writer, ratingStar, reviewPassword]);
  localStorage.setItem(`${similarMovieId} ${writer}`, reviewArrJson);
};

let printReview = () => {
  const reviewTable = document.querySelector(".reviewTable");

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const splitKey = key.split(" ");
    if (splitKey[0] === similarMovieId) {
      const reviewArr = JSON.parse(localStorage.getItem(key));
      const newRow = reviewTable.insertRow(0);
      newRow.innerHTML = `
      <tr class="reviewRow">
        <td>${reviewArr[0]}</td>
        <td>${reviewArr[1]}</td>
        <td>${reviewArr[2]}</td>
        <td>
          <button class="writeBtn" type="button">수정</button>
          <button class="writeBtn" type="button">삭제</button>
        </td>
      </tr>
    `;
      console.log(reviewArr[3]);
    }
  }
};

controlReview();
