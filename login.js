function showSignup(){
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
}

function showLogin(){
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

const emailLogin = document.querySelector("#email-login");
const passwordLogin = document.querySelector("#password-login");
const loginButton = document.querySelector("#login-button");
const signupName = document.querySelector("#signup-name");
const signupEmail = document.querySelector("#signup-email");
const signupPassword = document.querySelector("#signup-password");
const signupButton = document.querySelector("#signup-button");

function getStoredUser() {
  const storedUser = localStorage.getItem("campusLFUser");
  return storedUser ? JSON.parse(storedUser) : null;
}

function setCurrentUser(user) {
  localStorage.setItem("campusLFCurrentUser", JSON.stringify(user));
}

signupButton.addEventListener("click", (e) => {
  e.preventDefault();

  const fullName = signupName.value.trim();
  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!fullName) {
    alert("Please enter your full name.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters.");
    return;
  }

  const user = {
    name: fullName,
    email,
    password,
  };

  localStorage.setItem("campusLFUser", JSON.stringify(user));
  localStorage.removeItem("campusLFCurrentUser");
  alert("Signup successful! Please login now.");
  showLogin();
  emailLogin.value = email;
  passwordLogin.value = "";
});

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailLogin.value.trim();
  const password = passwordLogin.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const storedUser = getStoredUser();

  if (!storedUser) {
    alert("No account found. Please sign up first.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Invalid Email ❌");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    setCurrentUser(storedUser);
    window.location.href = "home page/index.html";
  } else {
    alert("Wrong email or password ❌");
  }
});
