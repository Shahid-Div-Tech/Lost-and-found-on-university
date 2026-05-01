function getCurrentUser() {
  const current = localStorage.getItem("campusLFCurrentUser");
  return current ? JSON.parse(current) : null;
}

function getDashboardHref() {
  const path = decodeURIComponent(window.location.pathname);
  if (path.includes("/home page/") || path.includes("/filter-item/") || path.includes("/report item/")) {
    return "../dashboard.html";
  }
  return "dashboard.html";
}

function getLoginHref() {
  const path = decodeURIComponent(window.location.pathname);
  if (path.includes("/home page/") || path.includes("/filter-item/") || path.includes("/report item/")) {
    return "../index.html";
  }
  return "index.html";
}

function logoutUser() {
  localStorage.removeItem("campusLFCurrentUser");
  window.location.href = getLoginHref();
}

function updateUserGreeting() {
  const user = getCurrentUser();
  const greetingText = user ? `Hi, ${user.name} 👤` : "Login";
  const buttonHref = user ? getDashboardHref() : getLoginHref();

  document.querySelectorAll(".user-greeting").forEach((button) => {
    button.textContent = greetingText;
    button.style.cursor = "pointer";
    button.onclick = () => {
      window.location.href = buttonHref;
    };
  });

  document.querySelectorAll(".logout-button").forEach((button) => {
    if (user) {
      button.style.display = "inline-flex";
      button.onclick = logoutUser;
    } else {
      button.style.display = "none";
    }
  });
}

updateUserGreeting();
