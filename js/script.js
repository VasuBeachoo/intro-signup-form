const signupForm = document.querySelector(".signup-form");

function displayError(input) {
  const inputContainer = input.parentElement;

  const errorMsg = document.createElement("p");
  errorMsg.innerText = input.placeholder + " cannot be empty";
  errorMsg.className = "error-msg medium-text";

  const errorIcon = document.createElement("img");
  errorIcon.src = "./images/icon-error.svg";
  errorIcon.className = "error-icon";

  inputContainer.append(errorMsg, errorIcon);
}

function inputsValid(e) {
  let invalidInputs = true;
  const inputs = Array.from(e.target);
  inputs.forEach((input) => {
    if (input.value === "") {
      displayError(input);
      invalidInputs = false;
    }
  });
  return invalidInputs;
}

function handleSubmit(e) {
  if (!inputsValid(e)) e.preventDefault();
}

signupForm.addEventListener("submit", handleSubmit);
