let str="JavaScript";
console.log(str[0]); // console.log(str.at(0));
console.log(str.slice(-3));
console.log(str.slice(0,5));
console.log(str.slice(4));
console.log(str.slice(0,4));
console.log(str.slice(1));
console.log(str.slice(0,-1));
console.log(str.slice(0,3)==="Jav");
console.log(str.slice(2,6));
//If you mean the exact middle character(s)
let middle=(str.slice(str.length/2-1,str.length/2+1));
console.log(middle);

//reverse a string using slice()
let result="";
for(let i=str.length-1;i>=0;i--){
    result+=str.slice(i,i+1); //result+=str[i]
}
console.log(result);


// transform
let string=" hello  world ";
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.trim());
console.log(string.trimStart());
console.log(string.trimEnd());
//replace
let strings="apple apple orange";
console.log(strings.replace("apple","grapes"));
console.log(strings.replaceAll("apple","grapes"));
//repeat
let str1="hi"
console.log(str1.repeat(3));
//pad
let val="5";
console.log(val.padStart(3,"0"));
console.log(val.padEnd(3,0));

//splitting and combining
let splicom="Hello World"
console.log(splicom.split());
console.log(splicom.split(""));
console.log(splicom.split(" "));
let fruits = "apple,banana,mango";
console.log(fruits.split(","));
let date = "2026-09-16";
console.log(date.split("-"));
//split() with a limit
let food="apple grapes banana avacado"
console.log(food.split(" ",3));

//dsa
let st2="welcome";
let arr2=st2.split("").reverse().join("");
console.log(arr2);
//concat & +
const vari1="hello";
const vari2="world"
console.log(vari1.concat(" ",vari2));
console.log(vari1+" "+vari2);
console.log(`${vari1} ${vari2}`);

//WITH split()
//count word
let sentence="I love js";
// let word=sentence.split("");
console.log(sentence.split(" ").length);
//first word 
let words = sentence.split(" ");
console.log(words[words.length - 1]);
//console.log(words.at(-1));

//template literals and type conversion 
let name="hello";
console.log("suhana "+`${name}`);
let a=10;
let b=20;
console.log(`sum= ${a+b}`);
let para=`hello
this my description`
console.log(para);
//type conversion
let type=123;
let resl=String(type);
console.log(resl);
console.log(typeof resl);
let type1="123";
let resl1=Number(type1);
// let resl1=Number(""); //0
console.log(resl1);
console.log(typeof resl1);
let type2=123;
const resl2=type2.toString();
console.log(typeof resl2);


//dsa
//count a character
let str3="banana 10 and 20";
let count=str3.match(/a/g)?.length||0;
console.log(count);
//find all numbers
let numbers=str3.match(/\d+/g);
console.log(numbers);
//remove all spaces
let space=str3.replaceAll(" ","")
console.log(space);
//with regex replace(/\s/g,"")
// Replace multiple spaces with one space.
let str4 = "hello    world     javascript";
let multspace = str4.replace(/\s+/g, " ");
console.log(multspace);

//string+array
//covert string->array->string
let str5="hello";
let reversed=str5.split("").reverse().join("");
console.log(reversed);

//string+object
//Count how many times each character appears.
let str6="heello";
//Create an empty object
let freq={};
//Loop through the string
for(let char of str6){
    console.log(char);
}
//Count each character
for(let char of str6){
    freq[char]=(freq[char] || 0)+1;
}
console.log(freq);
//Finding the Most Frequent Character
let maxChar="";
let maxCount=0;
for(let char of str6){
    if(freq[char]>maxCount){
        maxCount=freq[char];
        maxChar=char;
    }
}
console.log(maxChar);
console.log(maxCount);

//string+map
//Map is another excellent data structure for frequency counting.

let str7="banana";
let map=new Map();
for(let char of str7){
    map.set(char,(map.get(char)||0),+1)
}
console.log(map);
//map.set(key,value)
//map.get(key)

//string+set
//Set- stores unique values.
let set=new Set("programming")
console.log(set);
//Remove Duplicate Characters
let dupli=[...new Set(set)].join(""); //The spread operator converts the Set into an array: and join =>convert array into string
console.log(dupli);

//String + Set — Check Duplicate Characters
let str9="hello";
let set9=new Set(str9);
if(set9.size!==str9.length){
console.log("Duplicates Found");
}
else{
    console.log("No duplicates");
}

//String + Array + Set
let str10="banana";
let set10=[...new Set(str10)];
console.log(set10);
const arr10=set10.join("");
console.log(arr10);

//dsa 
//palindrome "madam"
let str11="madam";
let ispal=str11.split("").reverse().join("");
if(str11===ispal){
    console.log("palindrome");
}else{
    console.log("not palindrome");
}

//first Non-Repeating Character
// This combines String + Object.
let str12="aabbcdd";
let freq12={};
for(let char of str12){
    freq12[char]=(freq12[char]||0)+1;
}
for(let char of str12){
    if(freq12[char]===1){
        console.log(char);
        break;
    }
}
console.log(freq12);

//anagram
let str13 = "listen";
let str14 = "silent";

let sorted1 = str13.split("").sort().join("");
let sorted2 = str14.split("").sort().join("");

if (sorted1 === sorted2) {
    console.log("Anagram");
} else {
    console.log("Not Anagram");
}