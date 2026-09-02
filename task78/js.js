let sort = document.querySelector("#sort");

let products = document.querySelector(".products");

sort.addEventListener("change", function () {

    let cards = Array.from(document.querySelectorAll(".card"));

    cards.sort(function (a, b) {

        let price1 = a.querySelector(".price").innerText;
        let price2 = b.querySelector(".price").innerText;

        // ₹ hatao aur number banao
        price1 = Number(price1.replace("₹", ""));
        price2 = Number(price2.replace("₹", ""));


        if (sort.value === "low") {

            return price1 - price2;

        }

        else if (sort.value === "high") {

            return price2 - price1;

        }

        else {

            return 0;

        }

    });


    cards.forEach(function (card) {

        products.appendChild(card);

    });

});