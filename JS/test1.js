let str1="listen";
let str2="silent";
let result1=str1.split("").sort().join("");
let result2=str2.split("").sort().join("");
console.log(result1===result2);

let pali="madam";
let ispal=pali.split("").reverse().join("");
    console.log(ispal===pali);

let vow="programming";
let count=0;
for(let char of vow){
    if("aeiou".includes(char)){
        console.log(char);
        count++;
    }
}
console.log(count);

let strin="hello world suhana";
let words=strin.split(" ");
let result=""
for(let word of words){
result+=word[0].toUpperCase()+word.slice(1)+" ";
}
console.log(result);

//Remove all spaces from "a b c d".
let space="a b c d";
let rem=space.replaceAll(" ","");
console.log(rem);

// setInterval(()=>{
//     console.log("hi");
// },1000)

function greet(name,callback){
    callback(name)
}
greet("suhana", (name)=>{
    console.log("hello "+ name);
})

function add(a,b,callback){
    callback(a,b)
}
add(10,12,(a,b)=>{
    console.log(a+b);
})

function runtask(task,callback){
    task();
    task();
    task();
    callback();
}
runtask(()=>{
    console.log("hello");
},()=>{
    console.log("task completed 3 times");
})
