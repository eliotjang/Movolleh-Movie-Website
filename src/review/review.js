const reviewContent = document.querySelector(".reviewContent");

let addRow = () => {
  console.log("addRow");
};

let addTable = () => {
  const reviewTable = document.createElement("table");
  reviewTable.className = "reviewTable";
  reviewTable.innerHTML = `
    <table class="reviewTable">
    <tr>
    <td>리뷰 볼래?</td>
    <td>작성자 볼래?</td>
    <td>별점 볼래?</td>
    <td><input type='button' value='작성' onclick='addRow()'</td>
    </tr>
    </table>
    `;

  reviewContent.appendChild(reviewTable);
};

addTable();
