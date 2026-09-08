// Function
// function without parameter
function greetUser() {
  console.log("Hello, Suhana!");
}
greetUser();

// Function with a parameter
function greetUser1(name) {
  console.log("Hello, " + name + "!");
}
greetUser1("Suhana Parvin");

// function with template literals
function greetUser2(name) {
  console.log(`Hello, ${name}!`);
}
greetUser2("Suhana Parvin T.S");

// Arrow Function
const greetUser3 = (name) => {
  console.log(`Hello, ${name}!`);
};
greetUser3("Suhana...");

//because there's only one statement:
// const greetUser = name => console.log(`Hello, ${name}!`);

// greetUser("Suhana");

// Function Expression
const greetUser4 = function (name) {
  console.log(`Hello, ${name}!`);
};

greetUser4("Suhana");

//! parameters and return values.
function addNumbers(p, q) {
  return p + q;
}
console.log(addNumbers(10, 20)); //30

//function stored in variable
function hello(){
  console.log("Hello World");
}
const greets = hello();

// function constructor new Function()
const myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
//both above and below are same,below defined without new keyword
//const myFunction = function (a, b) {return a * b};
// let x = myFunction(4, 3);

//! Functions are Objects
console.log(typeof(myFunction)); //return function
//but functions are objects
//! functions have both properties and methods.
//arguments.length property returns the number of arguments received by the function:
function multiply(m, n) {
  return arguments.length;
}
multiply();       // Returns 0
// multiply(m, n);  // Returns 2

//toString() method returns the function as a string:
let text = multiply.toString();
console.log(text);

//! function calllback()
//A callback function is a function passed as an argument into another function.
// A callback function is intended to be executed later.
// Later is typically when a specific event occurs or an asynchronous operation completes.


//! Callback Function
function greet1(name){
    console.log("Hello" + name);
}
function processUser(Callback){
    Callback("suhana");
}
processUser(greet1);

//Callback with an Anonymous Function
function process(Callback){
    Callback();
}
process(function(){
console.log("Hello!");
});

//Callback with Arrow Function
function processed(callback){
    callback();
}
process(()=>{
console.log("Hello JavaScript!");
});

//Callback with forEach()
const fruits=["Apple", "Banana", "Mango"];
fruits.forEach(function(fruit){
    console.log(fruit);
});

//Callback with setTimeout()
setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);

//Callback with map()
const numbers11 = [1, 2, 3, 4];
const doubled = numbers11.map(function(number) {
    return number * 2;
});

console.log(doubled);


//Asynchronous Operations CALLBACKS
setTimeout(myFunction1, 3000);
function myFunction1() {
 console.log("I love You !!");
}

// discount amount = price × discountPercentage / 100 (10% of 1000 = 100) price - discount amount(1000 - 100 = 900)
function calculateDiscount(price, discountPercentage) {
  return price - (price * discountPercentage) // 100;
}
console.log(calculateDiscount(1000, 10)); // 900

//Function + Condition
function checkAge(age) {

  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
console.log(checkAge(20));

//Function + Array + Loops
const numbers = [10, 20, 30, 40];
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumArray(numbers));

//Function + Find Largest
const numbers1 = [10, 25, 7, 40, 15];
function findLargest(numbers1) {
  let largest =numbers1[0];
  for (let i = 0; i < numbers1.length; i++) {
    if(numbers1[i]>largest){
        largest = numbers1[i];
  }
}
return largest;
}
console.log(findLargest(numbers1));

//Shorthand in Functions
function createUser(name, email, age) {
    return {
        name,
        email,
        age
    };
}
const user = createUser(
    "Suhana",
    "suhana@example.com",
    20
);
console.log(user);

//Destructing + Shorthand
const user06 = {
    name06: "Suhana",
    age06: 20
};

const { name06, age06 } = user06;

const student06 = {
    name06,
    age06
};
console.log(student06);

//Destructuring	Object → variables	
// const { name } = person
//Shorthand	Variables → object properties	
//{ name }


//! this in function
//this refers to the object that owns the method.
//! Functions are Objects Methods
//All JavaScript functions are object methods.
//A function can be:
// A method of a JavaScript object
// A method of the global object
//this in an Object Method
const person1={
  firstName:"John",
  lastName:"doe",
  fullName: function(){
    return this.firstName + "" +this.lastName;
  }
};
person1.fullName();

//this in a Function (Default)
function myFunction2() {
  return this;
}
//this in a Function (Strict Mode)
// strict mode does not allow default binding.
// In strict mode, this used inside a function is undefined.
"use strict";
function myFunction3() {
  return this;
}
//this Alone
let z = this;