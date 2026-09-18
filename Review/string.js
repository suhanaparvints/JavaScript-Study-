const text="javaScript"
console.log(text.length);
console.log(text[text.length-6]);
console.log(text[0]);
// console.log(text[-1]); //undefined
//.at()
console.log(text.at(2));
console.log(text.at(-3));
//empty
const str="";
console.log(str);
console.log(str.length);
//typeof
console.log(typeof str);
//space length
let name = "Suhana Parvin";
console.log(name.length);
//numbers
let str1=123;
let str2="123"
console.log(str1);
console.log(str2);

//escape sequences
let message1="she is\n me"
console.log(message1);
let message2="she is\t here"
console.log(message2);
let message = "She said \"Hello\"";
console.log(message);

//assecing string
let word = "JavaScript";
console.log(word[0]);
console.log(word.at(4));
console.log(word.charAt(0)); //all are return characters 
console.log(word.charCodeAt(0)); //UTF-16 code unit

console.log(word.at(-1));
console.log(word.charAt(-1)); //space aavum no returns


//searching in string
let txt = "I am learning JavaScript";
console.log(txt.includes("l"));
console.log(txt.indexOf("g"));
console.log(txt.lastIndexOf("a"));
console.log(txt.startsWith("I"));
console.log(txt.endsWith("t"));

//Extracting
let mess="JavaScript";
console.log(mess.slice(2));
console.log(mess.slice(0,3));
console.log(mess.slice(-6));
console.log(mess.slice(-6,-3)); //scr
//substring() converts negative arguments to 0.
console.log(mess.substring(0,4));
console.log(mess.substring(-4)); //JavaScript
console.log(mess.substring(6,2)); //swapped
//substr()
console.log(mess.substr(0,5)); //JavaS
console.log(mess.substr(-6,3));
console.log(mess.substr(6,-1)); //neg length return space

const msg="  Welcome suhana";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(msg.trim());
console.log(msg.trimStart());
console.log(msg.trimEnd());
console.log(msg.replace("suhana","home"));
const fts="apple apple apple";
console.log(fts);
console.log(fts.replaceAll("apple","orange"));
const msg1="Hi";
console.log(msg1.repeat(3));

const text1="5";
console.log(text1.padStart(3,"0"));
console.log(text1.padEnd(3,"0"));

//split() strimg=> array
let text2 = "HTML CSS JavaScript";
let skills = text2.split(" ");
console.log(skills);
//join() array=>string
console.log(skills.join(""));
//concat()
let firstName = "Suhana";
let lastName = "Parvin";
console.log(firstName + " " + lastName);
console.log(firstName.concat(" ", lastName));



