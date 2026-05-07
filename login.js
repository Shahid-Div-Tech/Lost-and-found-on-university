// --- Modal Controls ---
function openModal() {
    document.getElementById("signupModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("signupModal").style.none = "none";
}
function openForgotModal() {
    document.getElementById("forgotModal").style.display = "flex";
}
function closeForgotModal() {
    document.getElementById("forgotModal").style.display = "none";
}
function closeResetModal() {
    document.getElementById("resetModal").style.display = "none";
}

let token = localStorage.getItem("token");

if (token) {
    window.location = "/home page/index.html";
} else {
 //login

    let emailLogin = document.querySelector("#email-login");
    let passwordLogin = document.querySelector("#password-login");
    let loginButton = document.querySelector("#login-button");

    loginButton.addEventListener("click", async (e) => {
        e.preventDefault();
        let email = emailLogin.value.trim();
        let password = passwordLogin.value;

        if (!email || !password) {
            alert("Fill all fields");
            return;
        }

        try {
            let res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            let data = await res.json();
            if (res.ok) {
                localStorage.setItem("token", data.data.token);
                alert("Login successful");
                window.location = "/home page/index.html";
            } else {
                alert(data.message || "Login failed");
            }
        } catch (error) {
            alert("Server error");
        }
    });

   //signup
    let signupBtn = document.querySelector("#signupModal .signup-btn");
    signupBtn.addEventListener("click", async () => {
        let firstName = document.querySelector("#firstName").value.trim();
        let lastName = document.querySelector("#lastName").value.trim();
        let email = document.querySelector("#signupEmail").value.trim();
        let password = document.querySelector("#signupPassword").value;
        let phone = document.querySelector("#phoneNumber").value.trim();
        let name = firstName + " " + lastName;

        if (!firstName || !lastName || !email || !password || !phone) {
            alert("Fill all fields");
            return;
        }

        try {
            let res = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, phone }),
            });
            let data = await res.json();
            if (res.ok) {
                alert("Signup successful");
                document.getElementById("signupModal").style.display = "none";
            } else {
                alert(data.message || "Signup failed");
            }
        } catch (error) {
            alert("Server error");
        }
    });

    //forgot password-
    let forgotSubmit = document.querySelector("#forgot-password-submit");
    forgotSubmit.addEventListener("click", async () => {
        let email = document.querySelector("#forgot-email-input").value.trim();
        if (!email) return alert("Email is required");

        try {
            let res = await fetch("http://localhost:3000/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            let data = await res.json();
            if (res.ok) {
                alert("OTP sent : Check your email or console.");
                closeForgotModal();
                document.getElementById("resetModal").style.display = "flex";
            } else {
                alert(data.message);
            }
        } catch (err)
         { alert("Server error"); }
    });

    //reset password
    let resetSubmit = document.querySelector("#reset-password-submit");
    resetSubmit.addEventListener("click", async () => {
        let email = document.querySelector("#forgot-email-input").value.trim();
        let otp = document.querySelector("#reset-otp-input").value.trim();
        let newPassword = document.querySelector("#new-password-input").value;

        if (!otp || !newPassword) return alert("Fill all fields");

        try {
            let res = await fetch("http://localhost:3000/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp, newPassword }),
            });
            let data = await res.json();
            if (res.ok) {
                alert("Password reset successful! Now you can login.");
                closeResetModal();
            } else {
                alert(data.message);
            }
        } catch (err) { alert("Server error"); }
    });
}