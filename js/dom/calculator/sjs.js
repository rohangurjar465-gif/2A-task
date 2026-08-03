let d = document.getElementById("d");

function add(v){
d.value += v;
}

function result(){
d.value = eval(d.value);
}

function clr(){
d.value = "";
}