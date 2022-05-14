const signupForm = document.querySelector(".signup-form");

function displayError(input, errorType) {
  const inputContainer = input.parentElement;

  const errorMsg = document.createElement("p");
  errorMsg.className = "error-msg medium-text";
  if (errorType === "empty")
    errorMsg.innerText = input.placeholder + " cannot be empty";
  else if (errorType === "invalid")
    errorMsg.innerText = "Looks like this " + input.placeholder + " is invalid";

  const errorIcon = document.createElement("img");
  errorIcon.src = "./images/icon-error.svg";
  errorIcon.className = "error-icon";

  input.className = "invalid-input semi-bold-text";
  inputContainer.append(errorMsg, errorIcon);
}

function inputsValid(e) {
  let validInputs = true;
  const inputs = Array.from(e.target);
  inputs.forEach((input) => {
    if (input.value === "") {
      displayError(input, "empty");
      validInputs = false;
    } else if (!input.validity.valid) {
      displayError(input, "invalid");
      validInputs = false;
    } else {
      if (
        input.type === "text" ||
        input.type === "email" ||
        input.type === "password"
      )
        input.className = "regular-input semi-bold-text";
    }
  });
  return validInputs;
}

function removeErrorMsgs() {
  const errorMsgs = Array.from(document.querySelectorAll(".error-msg"));
  errorMsgs.forEach((errorMsg) => errorMsg.remove());

  const errorIcons = Array.from(document.querySelectorAll(".error-icon"));
  errorIcons.forEach((errorIcon) => errorIcon.remove());
}

function handleSubmit(e) {
  removeErrorMsgs();
  if (!inputsValid(e)) e.preventDefault();
}

signupForm.addEventListener("submit", handleSubmit);
