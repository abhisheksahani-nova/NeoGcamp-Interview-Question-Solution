const text = document.querySelector("#text");
const buttonLarge = document.querySelector("#btn-large");
const buttonSmall = document.querySelector("#btn-small");

var fontSize = 32;

buttonLarge.addEventListener("click", function increaseFontSize() {

  fontSize += 2;

  text.style.fontSize = `${fontSize}px` ;

})

buttonSmall.addEventListener("click", function decreaseFontSize() {

  fontSize -= 2;

  text.style.fontSize =`${fontSize}px` ;

})
