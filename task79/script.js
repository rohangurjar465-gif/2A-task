let modal = document.querySelector(".modal");
let detailsBtn = document.querySelectorAll(".details");
let closeBtn = document.querySelector(".close");

let modalImg = document.querySelector("#modalImg");
let modalTitle = document.querySelector("#modalTitle");
let modalPrice = document.querySelector("#modalPrice");

detailsBtn.forEach((button) => {

    button.addEventListener("click", () => {

        let card = button.parentElement;

        let img = card.querySelector("img").src;
        let title = card.querySelector("h3").innerText;
        let price = card.querySelector(".price").innerText;

        modalImg.src = img;
        modalTitle.innerText = title;
        modalPrice.innerText = price;

        modal.style.display = "block";

        document.body.style.overflow = "hidden";

    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

    document.body.style.overflow = "auto";

});

// window.addEventListener("click", (e) => {

//     if (e.target == modal) {

//         modal.style.display = "none";

//         document.body.style.overflow = "auto";

//     }

// });