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
      <td><input class="reviewText" type="text" placeholder="리뷰 내용 (최대 30자)" size=60 maxlength=30 /></td>
      <td><input class="writer" type="text" placeholder="작성자" size=5 /></td>
      <td><input class="ratingStar" type="text" placeholder="별점" size=3 /></td>
      <td><input class="reviewPassword" type="password" placeholder="비밀번호" size=7 /></td>
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
  const reviewPassword = document.querySelector(".reviewPassword").value;

  const reviewArrJson = JSON.stringify([reviewText, writer, ratingStar, reviewPassword]);
  localStorage.setItem(writer, reviewArrJson);
};

let printReview = () => {
  const reviewTable = document.querySelector(".reviewTable");

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const reviewArr = JSON.parse(localStorage.getItem(key));
    const newRow = reviewTable.insertRow(0);
    newRow.innerHTML = `
      <tr class="reviewRow">
        <td>${reviewArr[0]}</td>
        <td>${reviewArr[1]}</td>
        <td>${reviewArr[2]}</td>
        <td>${reviewArr[3]}</td>
        <td>
          <button class="writeBtn" type="button">수정</button>
          <button class="writeBtn" type="button">삭제</button>
        </td>
      </tr>
    `;
  }
};

controlReview();
