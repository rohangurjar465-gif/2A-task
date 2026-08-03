let btn=document.querySelector("#btn");
let result=document.querySelector("#result");
let spiner=document.querySelector("#loader")

 let data;
    btn.addEventListener("click",()=>{
    
            // let url="https://jsonplaceholder.typicode.com/usere";
                let url="https://jsonplaceholder.typicode.com/users";


       
       async function fetchdata(){

    try{

        spiner.style.display="block";
        result.innerHTML="";

        let promise = await fetch(url);

        let data = await promise.json();

        spiner.style.display="none";

        data.forEach(ev=>{

            result.innerHTML += `
            <h3>${ev.username}</h3>
            <p>${ev.email}</p>
            <p>${ev.address.city}</p>
            <hr>
            `;

        });

    }
    

    catch(error){

        spiner.style.display="none";

        result.innerHTML="Error Please try again";

        console.log(error);

    }

}
fetchdata();
});
