const string="123";
let num= Number(string);
console.log(num);
console.log(typeof num);

// let num2 = parseInt("123");
// console.log(num2); // 123
//  console.log(typeof num2)


const number=456;
let string1=String(number)
console.log(string1);
console.log(typeof string1);

// let num = 456;
// let str = num.toString();
// console.log(str);
// console.log(typeof str);

//array or not
const arr=["apple"]
console.log(Array.isArray(arr));
// true-1 false-0
let t=true;
let f=false;
t=1;
f=0;
console.log(t);
console.log(f);
// or
//Convert true to 1 and false to 0
console.log(Number(true));
console.log(Number(false));



//reverse
const rev="hello"
const op= rev.split("").reverse().join("");
console.log(op);
//without reverse()
const wot="hello";
let resl= "";
for (let i=wot.length-1;i>=0;i--) {
    resl=resl+wot[i];
}
console.log(resl);

//palindrome
const pal="madam";
const OP=pal.split("").reverse().join("");
console.log(pal===OP);

//2string same
const str1="hello";
const str2="Hello";
console.log(str1===str2);

//same character anagram ex: listen silent
const anagram1="listen"
const anagram2="silent"
let a= anagram1.split("").sort().join("");
console.log(a);
let b=anagram2.split("").sort().join("");
console.log(b);
console.log(a===b);

//count vowels
const vowels="hello";
let count=0;
for(let char of vowels){
    if("aeiou".includes(char)){
        count ++;
    }
}
console.log(count);

//count specific character
let sp="hello";
let count1=0;
for(let char of sp){
    if(char==="o")
    {
        count1++;
    }
}
console.log(count1);

//duplicate character find
let hey="hello";
for(let char of hey){
    if(hey.indexOf(char)!==hey.lastIndexOf(char)){
        console.log(char);
    }
}
