// let a = 10;
// let name = "Rohan";
// debugger;
// console.log(name);
// console.log(a);
// document.write(name);
// document.write(a);

// function greet() {
//   let sum;
//   console.log("normal function");

//   const gret = function () {
//     console.log("arrow funtion");
//   };
//   gret();
// }
// greet();

// const demo="roha gurjar";
// console.log(demo);

// let a =20;
// let b="rohan";
// console.log(`name ${b} no ${a} `);

// let c ={
//   name : "rohan",
//   id : 1234,
// }
// console.log(c);
///////////////////////////////////////////////////////////////////////////////////////////

// login demo
// let username = "rohan";
// let pass = 1234;
// let user = prompt("enter username");
// if (user == username) {
//   let ps = prompt("enter password");
//   if (ps == pass) {
//     console.log("login sucesfull");
//   }
//   else{
//     console.log("correct feel information");
    
//   }
// } else {
//   console.log("invaild information");
// }
///////////////////////////////////////////////////////////////////////////////////////////

// let value= Number(prompt("enter value 1"))
// let value1=Number(prompt("enter value two "))
// let op=prompt(
//   "+"
//   ,"-"
//   ,"*"
//   ,"/"
// )
// switch (op) {
//   case "+":
//     console.log(value+value1);

//     case "-":
//       console.log(value-value1);
//     case "*":
//       console.log(value*value1);
//       case "/":
//         console.log(value/value1);
//     break;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let check=Number(prompt("check balance , withrow , deposite"))
// switch (check) {
//   case 1:
//     console.log("check balance");
//     break;
//   case 2 :
//     console.log("withrow");
//     break;
//     case 3:
//       console.log("deposite");
      
//   default:
//     break;
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let persone={
//   name : "rohan",
//   addres: {
//     city: "indore",
//     pincode: 12345
//   }
// };
// console.log(persone.addres.city);
// console.log(persone?.age);

// optionalchaning
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4];

// let [a, ...rest] = arr;

// console.log(a);    // 1
// console.log(rest); // [2,3,4]
// rest op
////////////////////////////////////////////////////////////////////////////////////////////////


// operator

// even no

// let even = Number(prompt("enter number"))
// if (even % 2 == 0) {
//   console.log("even no");
// } else {
//   console.log("not even ");
// }
// let even1 = Number(prompt("enter number"))
// let res = even1%2==0 ? "true" : "false";
// console.log(res);

// let num = Number(prompt("Enter number 1"));
// let num1 = Number(prompt("Enter number 2"));

// let result = num > num1 ? "Num is Greater" : "Num1 is Greater";

// console.log(result);

// let a = 10;
// console.log(typeof a);

// speard

let a=[1,2,3];
let b=[4,5,6]
let c=[...a , ...b]
console.log(c);

// rest

// loop
                                         // of loop
// let num=[1,2,3,4,5];
// for (const res of num) {
//   console.log(res);
// }

                                         // in loop
// let num ={
//    name:"rohan",
//    id:123
// }
// for (const key in num) {
//  console.log(key);
 
// }

