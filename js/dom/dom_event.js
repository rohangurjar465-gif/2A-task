let a = document.querySelector("#password");
let b = document.querySelector("#btn");

function events() {
  if (b.innerHTML == "show") {
    a.type = "text"; // password show
    b.innerHTML = "hide";
  } else {
    a.type = "password"; // password hide
    b.innerHTML = "show";
  }
}

let addev = document.querySelector("#addevent");
let head = document.querySelector("h1");
let parra = document.querySelector("p");

addev.addEventListener("click", () => {
  let temp = head.innerHTML;
  head.innerHTML = parra.innerHTML;
  parra = temp.innerHTML;
});

let btn = document.querySelector("#clr");
let sty = document.querySelector("#stylebtn");

sty.addEventListener("click", () => {
  btn.style.color = "red";

    // btn.style.fontsize="100px";
  // btn.style.backgroundcolor = "yellow";

});
 