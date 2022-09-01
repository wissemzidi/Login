// const
const emailInput = document.querySelector("#email__input");
const passwordInput = document.querySelector("#password__input");
const inputs = [emailInput, passwordInput];
const submitBtn = document.querySelector("#login__submit__btn");

inputs.forEach((e) => {
  e.addEventListener("keydown", () => {
    if (
      emailInput.classList.contains("valid") &&
      passwordInput.classList.contains("valid")
    ) {
      console.log("allValid");
      submitBtn.classList.add("allValid");
      submitBtn.style.backgroundColor = "hsl(var(--clr-neutral-100))";
      submitBtn.style.color = "white";
    } else {
      submitBtn.classList.remove("allValid");
      submitBtn.style.backgroundColor = "transparent";
      submitBtn.style.color = "black";
    }
  });
});

emailInput.addEventListener("keyup", () => {
  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    emailInput.className = "invalid";
  } else {
    emailInput.className = "valid";
  }
});

passwordInput.addEventListener("keyup", () => {
  if (passwordInput.value.length > 5) {
    passwordInput.className = "valid";
  } else {
    passwordInput.className = "invalid";
  }
});

submitBtn.addEventListener("click", () => {
  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    emailInput.className = "invalid";
    emailInput.animate(
      [
        { transform: "translateX(0px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0px)" },
      ],
      {
        duration: 200,
      }
    );
    setTimeout(() => {
      emailInput.className = "";
    }, 2000);
  } else {
    emailInput.className = "valid";
  }
  if (passwordInput.value.length >= 6) {
    passwordInput.className = "valid";
  } else {
    passwordInput.className = "invalid";
    passwordInput.animate(
      [
        { transform: "translateX(0px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0px)" },
      ],
      {
        duration: 200,
      }
    );
    setTimeout(() => {
      passwordInput.className = "";
    }, 2000);
  }
});
