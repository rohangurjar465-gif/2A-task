let btn = document.querySelector("#btn");
let city = document.querySelector("#city");
let result = document.querySelector("#result");
let spiner = document.querySelector("#loader");


btn.addEventListener("click",()=>{

 async function now() {
            spiner.style.display="block";

    let url=`https://wttr.in/${city.value}?format=j1`;

  try {
      let data=await fetch(url);
      let  value=await data.json();
      console.log(value);
              spiner.style.display="none";
              value.innerHTML="";

       result.innerHTML=`

        <h2>${city.value.toUpperCase()}</h2>

        <h3> Temp : ${value.current_condition[0].temp_C} °C</h3>

        <h3> Weather : ${value.current_condition[0].weatherDesc[0].value}</h3>

        <h3> Humidity : ${value.current_condition[0].humidity}%</h3>

        <h3> Wind : ${value.current_condition[0].windspeedKmph} Km/h</h3>

        `;
  } catch (error) {
            spiner.style.display="none";

        result.innerHTML="try again";
        console.log(error);
        
      }


    }
    now();
});










