let full_name = document.getElementById("full_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let sign_up_btn = document.getElementById("sign_up_btn");
let user_info = {
    full_name: "",
    email: "",
    password: "",
};

function signUp () {
    user_info.full_name = full_name.value;
    user_info.email = email.value;
    user_info.password = password.value;
    console.log(user_info);
}

sign_up_btn.addEventListener("click", signUp);