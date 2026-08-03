let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar-full");

menu.addEventListener("click", function(){

if(sidebar.style.left === "0px"){
sidebar.style.left = "-200px";
}else{
sidebar.style.left = "0px";
}

});


let icons = document.querySelectorAll(".right div");

icons.forEach(function(icon){
    let tip = icon.querySelector(".tooltip");

    icon.addEventListener("mouseenter", function(){
        tip.style.display = "block";
    });

    icon.addEventListener("mouseleave", function(){
        tip.style.display = "none";
    });
});


//      let modell = document.querySelector(".model");
// let formbtn = document.querySelector("#formbtn");
// let closebtn = document.querySelector(".model span");

// formbtn.addEventListener("click" ,()=>{
//     modell.style.display = "block";
// });


// closebtn.addEventListener("click", ()=>{
//     modell.style.display = "none";
// });


