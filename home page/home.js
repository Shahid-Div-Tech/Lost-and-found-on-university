let logout = document.querySelector(".logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("token");
window.location = "../index.html";
});


window.addEventListener("load", () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "../index.html";
  }
});