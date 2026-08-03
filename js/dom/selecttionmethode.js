console.log("hello");

// let a = document.getElementById("dom");
// console.log(a);

let b = document.querySelector(".query");
console.log(b);


let c = document.querySelector(".onein");
let d = document.querySelector(".twoin");
let e = document.querySelector(".threein");

console.log(c.type);
console.log(d.placeholder);
console.log(e.password);

c.placeholder = "enter name";
e.type="password";

