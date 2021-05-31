const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", emailValidate);

function emailValidate(e) {
  const inputValue = input.value;
  if (inputValue === "") {
    setError(input, "Email is required");
  } else if (!validateEmail(inputValue)) {
    setError(
      input,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    );
  } else {
    setSuccess(input, "You are now subscribed !!! Thanks");
  }
  e.preventDefault();
}

function setError(input, message) {
  const form = input.parentElement;
  const p = form.querySelector(".showError");
  const icon = form.querySelector(".error");

  icon.style.display = "block";
  input.style.border = "1px solid hsla(0, 93%, 68%,0.8)";
  p.innerText = message;
}

function validateEmail(inputValue) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(inputValue).toLowerCase());
}
function setSuccess(input, message) {
  const form = input.parentElement;
  const p = form.querySelector(".showError");
  const icon = form.querySelector(".error");
  input.style.border = "1px solid hsla(0, 6%, 24%, 0.2)";
  icon.style.display = "none";
  p.innerText = message;
  input.value = " ";
}
