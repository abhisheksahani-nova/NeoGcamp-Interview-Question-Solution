const firstInput = document.querySelector("#input-1");
const secondInput = document.querySelector("#input-2");
const addButton = document.querySelector("#btn-add");
const subtractButton = document.querySelector("#btn-subtract");
const multiplyButton = document.querySelector("#btn-multiply");
const divideButton = document.querySelector("#btn-divide");
const output = document.querySelector("#output");


addButton.addEventListener("click", function addition() {

  const sum = Number(firstInput.value) + Number(secondInput.value) ;

  output.innerText = sum;
})

subtractButton.addEventListener("click", function subtraction() {

  const minus = Number(firstInput.value) - Number(secondInput.value) ;

  output.innerText = minus;
})

multiplyButton.addEventListener("click", function multiplication() {

  const multiply = Number(firstInput.value) * Number(secondInput.value) ;

  output.innerText = multiply;
})

divideButton.addEventListener("click", function division() {

  const divide = Number(firstInput.value) / Number(secondInput.value) ;

  output.innerText = divide;
})




