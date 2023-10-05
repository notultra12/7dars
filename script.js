
let textInput = document.querySelector(".nameInput");

let textDiv = document.querySelector(".text");

function inputValue() {
  console.log(textInput.value);

  textDiv.textContent = textInput.value;
}