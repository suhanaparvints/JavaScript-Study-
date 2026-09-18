//for loop – Print all numbers from 1 to 50, but skip multiples of 5.
for (let i = 0; i <= 50; i++) {
  if (i % 5 !== 0) {
    console.log(i);
  }
}
//print all key and values using for...in
const user1 = {
  name: "ali",
  age: 25,
  country: "india",
};
for (const key in user1) {
  console.log(key, ":", user1[key]);
}
//using Object.entries() also
const user = {
  name: "Ali",
  age: 25,
  country: "India",
};
console.log(Object.entries(user));

const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
  console.log(fruit.toUpperCase());
}

//forEach – Sum all numbers in [5, 10, 15, 20].
const numbers = [5, 10, 15, 20];
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log(sum);

//while loop – Reverse a string "hello" without using .reverse().
let greet = "hello";
let reverse = "";
let i = greet.length - 1;
while (i >= 0) {
  reverse += greet[i];
  i--;
}
console.log(reverse);

//conditional statement
const number = 5;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}
// if...else if
let score = 80;
if (score >= 100) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else if (score >= 55) {
  console.log("C grade");
} else {
  console.log("Fail");
}

//switch case
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    "Looking day";
}
console.log(day);

//functions
function greeting(naming) {
  console.log(`Hello ${naming}`);
}
greeting("suhana parvin");

//=>
const square = (num) => num ** 2;
console.log(square(5));
//expression
const isPositive = function (nums) {
  return nums >= 0;
};
console.log(isPositive(5));
//default parameter
function welcome(name="Guest"){
    console.log(`welcome ${name}`);
}
welcome()
welcome("alice")
//  myFunction("David")

//rest
function sumAll(...numss) {
  return numss.reduce((total, numss) => (total += numss));
}
console.log(sumAll(2, 4, 6, 8));

//spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//with function
const array1 = [1, 2, 3];
const array2 = [4, 5];
function mergeArrays(...arrays) {
  //   return [].concat(...arrays);
  return arrays.flat();
}
console.log(mergeArrays(...array1, ...array2));

//IIFE
(function () {
  console.log("Script Started");
})();

//Array Method
//map()
const mapNum = [1, 2, 3, 4, 5];
const doubled = mapNum.map((num) => num * 2);
console.log(doubled);
//filter()
const filterNum = [5, 15, 25, 8];
const greater = filterNum.filter((num) => num > 10);
console.log(greater);
//reduce()
const reduceNum = [2, 3, 4];
const product = reduceNum.reduce((total, num) => (total *= num));
console.log(product);
//find()
const findNum = [10, 40, 60, 80];
const firstGreat = findNum.find((num) => num > 50);
console.log(firstGreat);

//object manipulation
const a = { name: "Sara" };
const b = { age: 27 };
const merge = { ...a, ...b };
console.log(merge);
//delete
delete merge.age;
console.log(merge);
//check
const obj = {
  a: 1,
  b: 2,
};
console.log(Object.hasOwn(obj, "c"));
//console.log(obj.hasOwnProperty("c"));

//deep update
const student = {
  name: "Ali",
  details: {
    grade: "B",
    city: "Delhi",
  },
};
student.details.grade = "A+";
console.log(student);

//string
//reverse
//using reverse()
let say = "JavaScript";
const reversed = say.split(" ").reverse().join(" ");
console.log(reversed);
//using function
function reverses(str) {
  return [...str].reverse().join("");
}
console.log(reverses("javascript"));

//vowels count
const word = "Programming";
const vowels = "aeiou";
let count = 0;
for (let i = 0; i < word.length - 1; i++) {
  // if(
  //     word[i]==="a" &&
  //     word[i]==="e" &&
  //     word[i]==="i" &&
  //     word[i]==="o" &&
  //     word[i]==="u"){
  //     count++;
  // }
  if (vowels.includes(word[i])) {
    count++;
  }
}
console.log(count);
// 1. Regex (one-liner)
// const count = (str.match(/[aeon]/gi) || []).length;

//! palindrome- A palindrome is a string that reads the same forwards and backwards. ex: madam, malayalam
const str = "madam";
const isPal = str === str.split("").reverse().join("");
console.log(isPal);

//capitalize first letter of each word
const string = "hello world from javascript";
const results = string
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");
console.log(results);

//remove spaces
const st = "a b c d";
const res = st.split(" ").join("");
console.log(res);
//or
// 1. replace with regex (all spaces)
st.replace(/\s/g, ""); // all whitespace(spaces,tab,newline)
// "abcd"
// 2. replace (only single space)
st.replace(/ /g, "");
// "abcd"

//new Set() remove duplicates
let numberss = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(numberss)];
console.log(uniqueNumbers);

//map()
let fruitss = ["apple", "banana", "apple", "orange"];
let countt = new Map();
for (let fruit of fruitss) {
  if (countt.has(fruit)) {
    countt.set(fruit, countt.get(fruit) + 1);
  } else {
    countt.set(fruit, 1);
  }
}
console.log(countt);

//type conversion
//string->number
let stri = "123";
let num1 = Number(stri);
let num2 = +"123";
let num3 = parseInt("123");
console.log(num1); //123
console.log(num2); //123
console.log(num3); //123
//number->string
let numm = 456;
let stng1 = String(numm);
console.log(stng1); //456
console.log(typeof stng1); //string
let stng2 = numm.toString();
console.log(stng2); //456

//isArray()
let fruits1 = ["apple", "banana"];
console.log(Array.isArray(fruits1));

//Convert true to 1 and false to 0
console.log(Number(true));
console.log(Number(false));
//or
let l = true;
let m = false;
let x = Number(l);
let y = Number(m);
console.log(x); //1
console.log(y); //0

//destructuring & template literals
const arr = [7, 8, 6];
const [n, o, p] = arr;
console.log(n, o, p);
//object destructuring
const person = {
  name: "ali",
  age: 25,
};
const { name, age } = person;
console.log(name);
console.log(age);
//template literals
const name1 = "Ali";
const age1 = 20;
console.log(`My name is ${name1} and I am ${age1} years old`);

//callback
function name2(name) {
  console.log("Hello " + name);
}
function user2(callback) {
  callback("suhana");
}
user2(name2);

//two num callback
function addNumbers(a, b, callback) {
  callback(a, b);
}
function add(x, y) {
  console.log(x + y);
}
addNumbers(10, 20, add);
//using arrow function 
// function addNumbers(a, b, callback) {
//     callback(a, b);
// }
// addNumbers(10, 20, (x, y) => {
//     console.log(x + y);
// });

//another way
function addnum(x, y) {
  return x + y;
}
function addNumbers1(a, b, callback) {
  console.log(callback(a, b));
}
addNumbers1(80,20,addnum);

// Create a function that runs a task 3 times and then calls a callback.
function task(callback){
    for(let i=1;i<=3;i++){
        console.log("Task Running");
    }
    callback();
}
function done(){
    console.log("Task completed");
}
task(done)

//currying
function multiply(q){
return function(r){
    return function(s){
        return q*r*s;
    }
}
}
console.log(multiply(1)(2)(3));
//interview question of currying
function adding(t){
return function(u){
    return function(v){
        return function() {  //imp
        return t+u+v;
    }
}
}
}
console.log(adding(4)(2)(4)());  
//curryying undefines
function addi(v){
    return function(w){
        if(w===undefined){
            return v;
        }
        return addi(v+w);
    }
}
console.log(addi(1)());
console.log(addi(1)(1)());
console.log(addi(1)(2)(3)(4)());

//arrow function
// let addi=v=>w=>w?addi(v+w):v;
// console.log(addi(1)());
// console.log(addi(1)(1)());
// console.log(addi(1)(2)(3)(4)());
