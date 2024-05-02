//모달열기
export const openModal = (message) => {
  document.getElementById("modalMessage").textContent = message;
  document.getElementById("myModal").style.display = "block";
};
//모달 닫기
export const closeModal = () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
};
// 버튼 클릭시 모달 닫기
document.querySelector(".close").addEventListener("click", () => {
  closeModal();
});

// 외부 클릭시 모달 닫기
window.addEventListener("click", (event) => {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
});

// TOP 버튼 스크롤 이벤트
window.addEventListener("scroll", () => {
  const topButton = document.getElementById("topButton");
  if (window.scrollY > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

document.getElementById("topButton").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
