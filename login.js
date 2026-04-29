function showSignup(){
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
}

function showLogin(){
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

let emailLogin=document.querySelector("#email-login")
let passwordLogin=document.querySelector("#password-login")

loginButton=document.querySelector("#login-button");

loginButton.addEventListener("click", () => {
  if(emailLogin.value==="shahid.iq1010@gmail.com"&& passwordLogin.value==="shahid1122" ){
      window.location.href="../home page/index.html"
  }
});