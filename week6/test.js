//setTimeout()
//setInterval()
//currying
//3types of destructuring
//string reverse without using in build function
//callback
//anagram

//setTimeout()
const promise=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("hello");
    },2000);
})
promise.then((result)=>{
    console.log(result);
});

//setInterval()
// const newProm=new Promise((resolve)=>{
//     setInterval(()=>{
//         console.log("hi");
//     },1000)
// })
// newProm.then((result)=>{
//     console.log(result);
// })
//cuurying()
function multiple(a){
    return function(b){
        return a*b;
    }
}
console.log(multiple(2)(4));

//3 object destructurinng

const student={
    name:"suhana",
    age:20,
      details:{
        pin:680125,
        city:"Thrissur",

    }
}
// const {name,age}=student;
// console.log(name);
// console.log(age);

//2nd
// const {name,age,details:{pin,city}}=student;
// console.log(pin);
// console.log(city);

//3rd
const {name:Username}=student;
console.log(Username);

//string reverse
let str="hello";
let result="";
// let i=str.length-1;
// while(i<=str){
//     result+=str[i];
//     i--;
// }
// console.log(result);
for(let i=str.length-1; i>=0;i--){
result+=str[i]
}
console.log(result);

//callback()
function greet(name){
    console.log("hello " + name);
}
function call(callback){
callback("suhana");
}
call(greet)
//
// function greets()

//anagram
const string="listen";
const string2="silent"
const an1=string.split("").sort().join("")
const an2=string2.split("").sort().join("")
console.log(an1===an2);