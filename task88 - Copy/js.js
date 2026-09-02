let input=document.querySelector("#serch");
let btn=document.querySelector("#btn");
let result=document.querySelector("#result");
let val;
   let url
btn.addEventListener("click",()=>{
data();
});
  
async function data() {
    url=`https://restcountries.com/v3.1/name/${input.value.toLowerCase()}`;

    let promise= await fetch(url);
   val= await promise.json();
    console.log(val);
    result.innerHTML=`
      <h2>${data[0].name.common}</h2>

    <p><b>Capital :</b> ${data[0].capital[0]}</p>

    <p><b>Region :</b> ${data[0].region}</p>

    <p><b>Population :</b> ${data[0].population}</p
    `;
    
     
}

