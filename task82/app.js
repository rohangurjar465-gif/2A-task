let btn=document.querySelector("#btn");
let result=document.querySelector("#result");
let spiner=document.querySelector("#loader")

    let url="https://jsonplaceholder.typicode.com/users";
 let data;
    btn.addEventListener("click",()=>{
       spiner.style.display="block";
       result.innerHTML="";
        async function fetchdata(){
            let promise=await fetch(url);
               console.log(promise);
               data=await promise.json();
              spiner.style.display="none";
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

