console.log("Hello World"); // print Hello World

// sum of Two Number

const a = 10;
const b = 20;
const c = a+b;
console.log(c);           // sum of two numbers Method 1

let d = 10;
let e = 40;
let f = d+e;
console.log(f);          // sum of two numbers Method 2

var g = 10;
var h = 50;
var i = g+h;
console.log(i);         // sum of two numbers Method 3


const x=20, y=60, z=x+y;
console.log(z);             // sum of two numbers Method 4

const u=50, v=60;
console.log(w=u+v);             // sum of two numbers Method 5


// Find even/odd numbers

const num = 40;
if (num % 2 === 0) {
    console.log("Even number");
} 
else {
    console.log("Odd number");            // method 1
}

const num1 = 91; 
console.log(num1 % 2 === 0 ? "even number" : "odd number");   // method 2


// Constructor function for Person Objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create 2 Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Add a Name Method
myMother.changeName = function (name) {
  this.lastName = name;
}

// Change Name
myMother.changeName("Doe");

// Display fullName
console.log (myMother.firstName+ " "+ myMother.lastName); 

//Accessing the Last Array Element

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 3];
console.log(fruit);

//Looping through array

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits1.length;

let text3 = "<ul>";
for (let i = 0; i < fLen; i++) {
  text3 += "<li>" + fruits1[i] + "</li>";
}
text3 += "</ul>";
console.log(text3);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const ul = document.createElement("ul");

// fruits.forEach(fruit => {
//     const li = document.createElement("li");
//     li.textContent = fruit;
//     ul.appendChild(li);
// });

// document.body.appendChild(ul);

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];

for (const fruit of fruits5) {
    console.log(fruit);
}