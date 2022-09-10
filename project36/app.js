//to check how long is the single text
const text = document.querySelectorAll(".thePaths");
for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastword = document.querySelector("#symbol");
const animation = document.querySelector("div.animation");
lastword.addEventListener("animationend", () => {
  animation.style = "transition: all 1.5s ease; opacity:0; pointer-events:none";
});
