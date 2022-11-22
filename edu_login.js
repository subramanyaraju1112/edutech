let email = document.getElementById("email_logIn");
let password = document.getElementById("password_logIn");
let log_in = document.getElementById("log_in");
let user_info = {
  email: "",
  password: "",
};

function logIn () {
    user_info.email = email.value;
    user_info.password = password.value;
    console.log(user_info);
}

log_in.addEventListener("click", logIn);