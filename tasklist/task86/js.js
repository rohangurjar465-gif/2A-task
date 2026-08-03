let serch=document.querySelector("#serch");
let btn=document.querySelector("#btn");
let result=document.querySelector("#result");

btn.addEventListener("click",()=>{
   data();
});

async function data() {
    let url=`https://dummyjson.com/users/search?q=${serch.value.toLowerCase()}`;

    let promise= await fetch(url);
    let data = await promise.json();
     
console.log(data);
result.innerHTML="";
data.users.forEach(function(user){

        result.innerHTML += `

        <div class="card">

        <h2>${user.firstName} ${user.lastName}</h2>

        <p>${user.email}</p>

        <p>Age : ${user.age}</p>

        </div>

        `;

    });
}