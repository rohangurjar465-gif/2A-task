// function demo(... allparams) {
//     console.log(allparams)
    
    
// }
// demo(10,20,30,40)
 
// spreart op
/////////////////////////////////////////////////

// function returne(num ,num1) {
//     return num+num1;

// }

// console.log(returne(10,20));

// return function
//////////////////////////////////////////////////////

// let A=function(){
//     console.log("annonomuse function");
    
// }
// A();

// ANNOUMUSER FUNCTION 
////////////////////////////////////////////////////////////
// function men(age,name) {
//     return age+name;
// }
// function women(age,name) {
//     return age+name
// }
// function total(num,num1,collback) {
//     console.log(num);
//     console.log(num1);
//     console.log(collback(50,"rohan gurjar",));
// }
// total(5,10,men);
// total(5,10,women)

// function greet(name) {
//     return "Hello " + name;
// }

// function processUser(callback) {
//     console.log(callback("Rohan"));
// }

// processUser(greet);

// callback function
/////////////////////////////////////////////////////////////////////
//  arrow funnction
// let adddata=(n,n1)=>{
//  console.log("arrowr function");
//  return n+n1;
// }

// console.log(adddata(10,20));
///////////////////////////////////////////////////////////////////////////

(function iife(){
    console.log("iife function ");
    
})();

/////////////////////////////////////////////////////////////////////
function hof(a ,b,cb) {
    let result=a+b;
    cb(result);
}
hof(10,20,function dem(value) {
    console.log(value+"hof function");
     
});
//////////////////////////////////////////////////////////////////////////

let vowel = "aeiou";
let count = 0;

let vow = () => {
    for (let demo of vowel) {
        if ("aeiou".includes(demo)) {
            count++;
        }
    }
    console.log(count);
};

vow();

//////////////////////////////////////////////

let factorial =(x)=>{
    let fact=1;
      for (let a= 1; a<=x; a++) {
        
        fact=fact*a;
      } 
      return fact;
       
}
console.log(factorial(5));

/////////////////////////////////////////////////////

function swap(a ,b ) {
let temp=a;
a=b;
b=temp;
 console.log("after swap");
 console.log(a+"10");
 console.log(b+" 20");
 
}
swap(10,20);
////////////////////////////////////////////////////////

function pattern() {
    let a=5;
    for(let x=1; x<=a; x++){
       let r=" ";
        for(let y=1; y<=x; y++){
        r=r+" *";
    
        }     
              console.log(r);
    }
}
pattern();

///////////////////////////////////////////////////////////////////

function even() {
    let num=10;
    for(let x=1; x<=num; x++){
        if (x%2==0) {
            console.log(x +"even num");
        }
    }
}
even();

/////////////////////////////////////////////////////////////////////
function odd() {
    let num=10;
    for(let x=1; x<=num; x++){
        if (x%2!==0) {
            console.log(x +"odd num");
        }
    }
}
odd();

///////////////////////////////////////////////////////

let number =(num,num1)=>{
    let num3=num+num1;
    console.log(num3);
    
}
number(10,20);

///////////////////////////////////////////////////////////
// function patterne() {
//     let a=5;
//     for(let x=1; x<=a; x++){
//     //    let r=" ";
//     console.log("*");
    
//         for(let y=1; y<=x; y++){
//             console.log("*");
            
//         // r=r+" *";
    
//         }     
//             //   console.log(r);
//     }
// }
// patterne();
/////////////////////////////////////////////////////////////////////