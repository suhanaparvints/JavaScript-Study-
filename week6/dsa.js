let print = "hello";
console.log(print);
console.log(print.length);
//print each character
for (let char of print) {
  console.log(char);
}
//
// for(let i=0;i<print.length;i++){
//     console.log(print[i]);
// }
//first character and last
console.log(print[0]);
console.log(print.at(0));
console.log(print.charAt(0));
console.log(print.at(-1));
console.log(print.length - 1); //index
//count character
//using object for...of
let freq = {};
for (let char of print) {
  freq[char] = (freq[char] || 0) + 1;
}
console.log(freq);
//or using map new Map()
const map = new Map();
for (let char of print) {
  map.set(char, (map.get(char) || 0) + 1);
}
console.log(map);
//count vowels //if any uppercase convert that into toLowercase
let vow = "programming of your computer";
let counts = 0;
for (let char of vow) {
  if ("aeiou".includes(char)) {
    counts++;
  }
}
console.log(counts);
//count constants
let str1 = "programming";
let freq1 = {};
let counting = 0;
for (let char of str1) {
  if (freq1[char] == 1) {
    console.log(counting);
    break;
  }
}
//using
let str2 = "programming";
let count2 = 0;
for (let char of str2) {
  if (!"aeiou".includes(char)) {
    count2++;
  }
}
console.log(count2);
//for (let char of str.toLowerCase()) {
// if (char >= "a" && char <= "z" && !"aeiou".includes(char))

//or count non repeating characters
let strings = "javascript";
let frequ = {};
for (let char of strings) {
  frequ[char] = (frequ[char] || 0) + 1;
}
let frecount = 0;
for (let char in frequ) {
  if (frequ[char] === 1) {
    frecount++;
    console.log(char);
  }
}
console.log(frecount);
//This same pattern is useful for:
// Count duplicate characters
// Find non-repeating characters
// Find first non-repeating character
// Find most frequent character
// Find least frequent character
// Check anagrams
// Character frequency problems

//count digits
let digit = "hellomy am suhana 20 years old, and 20.5";
let coudigi = 0;
for (let char of digit){
    if(char.match(/\d/g)){
        coudigi++;
    }
}
console.log(coudigi);

//count spaces
let space="hello world suhana!"
let counspace=0;
// for(let char of space){
//     if(char.match(/\s/g)){
//         counspace++;
//     }
// }
// console.log(counspace);

//withoutregex
for(let char of space){
    if(char===" "){
        counspace++;
    }
}
console.log(counspace);

//Convert lowercase → uppercase
let conToUp= space.toUpperCase();
console.log(conToUp);

//remove spaces
let remspc=space.replaceAll(" ","")
console.log(remspc);
//space.replace(/\s/g);\
// or 
// let result = "";
// for (let char of str) {
//     if (char !== " ") {
//         result += char;
//     }
// }
// console.log(result);

//reverse a string 
let stri="hello";
let rv=stri.split("").reverse().join("");
console.log(rv);
//reverse a string without reverse()
let reverse="";
for(let i=stri.length-1;i>=0;i--){
reverse+=stri[i];
}
console.log(reverse);

//copy a string
let stri1="hello";
let copstri1=stri1;// let copstri2=String(stri1)
console.log(copstri1);



