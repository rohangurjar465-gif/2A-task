let dropdowns=document.querySelectorAll(".dropdown select");

for (const select in dropdowns) {
    for (const code in countrycode) {
        let newo=document.createElement("option");
        newo.value=code;
        newo.innerText=code;
        dropdowns[select].appendChild(newo);
    }
}