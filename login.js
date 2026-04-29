function showSignup(){
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
}

function showLogin(){
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

let emailLogin = document.querySelector("#email-login");
let passwordLogin = document.querySelector("#password-login");
let loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", (e) => {

  e.preventDefault(); 

  let email = emailLogin.value.trim();
  let password = passwordLogin.value;

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  if (!emailPattern.test(email)) {
    alert("Invalid Email ❌");
    return;
  }

 
  if (email === "shahid.iq1010@gmail.com" && password === "shahid1122") {
    window.location.href = "/home page/index.html"; 
  } else {
    alert("Wrong email or password ❌");
  }

});