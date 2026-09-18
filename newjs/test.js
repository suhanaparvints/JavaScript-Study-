//setInterval()
//callback
//palindroe check
//anagram
//string contain vowels check

//setInterval
// let count=0;
// setInterval(()=>{
//     console.log("hi");
// },2000)
// while(count<=5){
//     clearInterval(count);
//     count++;
// }


//callback
function add(a,b,callback){
    callback(a,b)
}
add(10,12,function(a,b){
    console.log(a+b);
})

//palindrome
let pali="madam";
let ispal=pali.split("").reverse().join("");
console.log(pali===ispal);

//anagram
let str1="listen"
let str2="silent"
let result1=str1.split("").sort().join("");
let result2=str2.split("").sort().join("");
console.log(result1===result2);

//vowels
let vow="programming";
let count=0;
for(let char of vow){
    if("aeiou".includes(char)){
        console.log(char);
        count++;
    }
}
console.log(count);