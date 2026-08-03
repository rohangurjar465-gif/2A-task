let read = document.querySelector("#get");
let result = document.querySelector("#result");

read.addEventListener("click", () => {

    getData();

});

async function getData() {

    result.innerHTML = "";

    let response = await fetch("https://dummyjson.com/users");

    let data = await response.json();

    data.users.forEach(function(user) {

        result.innerHTML += `

        <h3>Name : ${user.firstName}</h3>

        <p>Email : ${user.email}</p>

        <p>City : ${user.address.city}</p>

        <hr>

        `;

    });

}


// adddta
let create = document.querySelector("#creat");
let display = document.querySelector("#adddata");
let fname = document.querySelector("#fname");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let seen = document.querySelector("#seen");

create.addEventListener("click", () => {

    display.style.display = "block";

});
seen.addEventListener("click", () => {

    addUser();

});

async function addUser() {

    let response = await fetch("https://dummyjson.com/users/add", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            firstName: fname.value,

            email: email.value,

            city: city.value

        })

    });

    let data = await response.json();

    result.innerHTML = `

    <h2>User Added</h2>

    <h3>Name : ${data.firstName}</h3>

    <p>Email : ${data.email}</p>

    <p>City : ${data.city}</p>

    `;

}


// dltuser


let dlt = document.querySelector("#dlt");
let id = document.querySelector("#id");
dlt.addEventListener("click", function () {
    if (id.style.display == "none") {
        id.style.display = "block";
        return;
    }
    deleteUser();

});

async function deleteUser() {
    if (id.value == "") {
        alert("Enter User ID")
        return;
    }
    let url = `https://dummyjson.com/users/${id.value}`;
    let response = await fetch(url, {
        method: "DELETE"
    });
    let data = await response.json();
  result.innerHTML = `
        <h2>User Deleted</h2>
        <p>ID : ${data.id}</p>
        <p>Name : ${data.firstName}</p>
    `;

}