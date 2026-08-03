let sort = document.querySelector("#sort");

let products = document.querySelector(".products");

sort.addEventListener("change", function () {

    let cards = Array.from(document.querySelectorAll(".card"));

    if (sort.value == "low") {

        cards.sort(function (a, b) {

            let price1 = a.querySelector(".price").innerText;
            let price2 = b.querySelector(".price").innerText;

            return price1 - price2;

        });

    }

    if (sort.value == "high") {

        cards.sort(function (a, b) {

            let price1 = a.querySelector(".price").innerText;
            let price2 = b.querySelector(".price").innerText;

            return price2 - price1;

        });

    }

    cards.forEach(function (card) {

        products.appendChild(card);

    });

});