let users = document.getElementById("users");

let next = document.getElementById("next");

let prev = document.getElementById("prev");

let page = 0;

async function showUsers() {

    let response = await fetch("https://dummyjson.com/users?limit=5&skip=" + page);

    let data = await response.json();

    users.innerHTML = "";

    data.users.forEach(function(user) {

        users.innerHTML +=
        "<div class='card'>" +
        "<h2>" + user.firstName + " " + user.lastName + "</h2>" +
        "<p>" + user.email + "</p>" +
        "<p>Age : " + user.age + "</p>" +
        "</div>";

    });

}

showUsers();

next.addEventListener("click", function() {

    page = page + 5;

    showUsers();

});

prev.addEventListener("click", function() {

    if (page > 0) {

        page = page - 5;

        showUsers();

    }

});