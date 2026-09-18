//! frequency problem
//check palindrome
let pali="madam";
let result=pali.split("").reverse().join("");
console.log(result===pali);
//or
let reverse="";
for(let char of pali){
    reverse+=char;
}
if(reverse===pali){
    console.log("palindrome");
}else{
    console.log("not palindrome");
}

// Palindrome ignoring spaces
let str="n u r u n"
let clean=str.replaceAll(" ","")
let checkpali=clean.split("").reverse().join("");
console.log(checkpali===clean);

//Palindrome ignoring case
let str1="A man a plan a canal Panama"
let clean1=str.toLowerCase();
let checkpali1=clean1.split("").reverse().join("");
console.log(checkpali1===clean1);

//Palindrome ignoring special characters
let str2 = "Madam, I'm Adam!";
let clean2=str2.toLowerCase().replace(/[^a-z0-9]/g,"");
console.log(clean2);
//let reverse = clean.split("").reverse().join("");
// console.log(reverse === clean);

