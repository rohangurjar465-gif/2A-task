let btn=document.querySelector("#btn");
let result=document.querySelector("#result");
let list=document.querySelector("#list");

    let url="https://jsonplaceholder.typicode.com/users";
 let data;
    btn.addEventListener("click",()=>{
       
        async function fetchdata(){
            let promise=await fetch(url);
               console.log(promise);
               data=await promise.json();

               data.forEach(ev => {
                                result.innerHTML += `

                <h3>Name : ${ev.username}</h3>

                <p>Email : ${ev.email}</p>

                <p>City : ${ev.address.city}</p>

                <hr>
            `;
               });
        }
    fetchdata();
    });

