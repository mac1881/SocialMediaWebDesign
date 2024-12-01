const container = document.querySelector(".container");
const SignupButton = document.querySelector(".signup-section header");
const LoginButton = document.querySelector(".login-section header");


LoginButton.addEventListener("click", () => {
    container.classList.add("active");
});
SignupButton.addEventListener("click", () => {
    container.classList.remove("active");
});
