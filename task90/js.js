let btn=document.querySelector("#btn");
let spiner=document.querySelector("#loader");
let tdata=document.querySelector("#tdata");

btn.addEventListener("click",()=>{
data();
});
 
async function data() {
     spiner.style.display="block";
        let url = "https://dummyjson.com/users";
        let promise=await fetch(url);
        let data= await promise.json();
      
console.log(data);

           tdata.innerHTML = "";

    data.users.forEach(function(user){
          spiner.style.display="none";
        tdata.innerHTML += `

        <tr>

        <td>${user.id}</td>

        <td>${user.firstName} ${user.lastName}</td>

        <td>${user.email}</td>

        <td>${user.age}</td>

        </tr>

        `;

    });

}