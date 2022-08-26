// const
const emailInput = document.querySelector("#email__input");
const passwordInput = document.querySelector("#password__input");
const submitBtn = document.querySelector("#login__submit__btn");

emailInput.addEventListener("keyup", () => {
  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    emailInput.className = "invalid";
  } else {
    emailInput.className = "valid";
  }
});

passwordInput.addEventListener("keyup", () => {
  if (passwordInput.value.length >= 6) {
    passwordInput.className = "valid";
  } else {
    passwordInput.className = "invalid";
  }
});