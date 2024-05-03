const reviewContent = document.querySelector(".reviewContent");

const table = document.createElement("table");
const new_row = table.insertRow();

const new_cell = new_row.insertCell(0);
let cellHTML = `test`;
new_cell.insertAdjacentHTML("afterbegin", cellHTML);

const new_cell2 = new_row.insertCell(1);
let cellHTML2 = `test22`;
new_cell2.insertAdjacentHTML("afterbegin", cellHTML2);

reviewContent.appendChild(table);
