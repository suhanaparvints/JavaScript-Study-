//This Keyword
//refers to the object/context that is executing a function.
//The important part is that its value depends mainly on how the function is called, not where it was written.
//Inside an Object method
const user = {
    name:"John",
    greet() {
        console.log(this.name);
    }
};
user.greet();

// In a regular Function
function show(){
    console.log(this);
}
show();

//In Arrow Function
const user1={
    name:"ashly",
    greeting(){
      const sayName = () =>{
        console.log(this.name);
      };
      sayName();
    }
};
user1.greeting();

// const user = {
//   name: "John",
//   greet: () => {
//     console.log(this.name);
//   }
// };
// user.greet(); // usually not "John"

//In constructor function
//When a function is called with new, this refers to the newly created object.
function user2(name){
this.name=name;
}
const user3= new user2("Alice");
console.log(user3.name);

//Inside a Classes
class user4{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
const user5 = new user4("Alice");
user5.greet();

//call, apply, bind
//explicitly control this.

//! call() - mmediately calls the function and lets you decide what this should refer to.
//Syntax: functionName.call(thisValue, arg1, arg2, ...);
//it execute immeadiately
//call() says: run this function with person as this.
function hello(){
  console.log(this.name);
}
const person={name: "Wonderland"};
hello.call(person);

//Example
const persons = {
    name: "Suhana!"
}
function greets(age) {
    console.log(`Hello ${this.name}`);
    console.log(`Age: ${age}`);
}
greets.call(persons, 21);

//! apply() - works almost exactly like call(). The main difference is how arguments are passed.

//call()
//Arguments are passed individually:
//greet.call(person, 21, "India");

//apply()
// Arguments are passed as an array:
//it execute immeadiately
//greet.apply(person, [21, "India"]);
const person1={
    name:"Shemi"
};
function introduce(age, country){
    console.log(`Hello ${this.name}`);
    console.log(`Age: ${age}`); //Age: 21
    //or
    console.log(age); //21
    console.log(country);
}
introduce.apply(person1,[21,"India"]);

//! bind() -  bind() is different. It doesn't immediately execute the function.
//it creates a new function with this permanently associated with the object you provide.
//It creates a new function. 
//Ex: const newFunction = greet.bind(person);
//the newFunction(); executes it
//arguments are passed as Individually / preset
//it doesn't execute immediately. executes later and returns a function.
const student={
    name:"suhan@"
};
function greet1(){
    console.log(`Heyy ${this.name}`);
}
const newFunction= greet1.bind(student);
newFunction();


//bind() can preset arguments.
function add(a, b) {
    return a + b;
}
const add10 = add.bind(null, 10);
console.log(add10(5));
//a=10,b=5


//CALL → Call now
// APPLY → Apply now with an array
// BIND → Bind for later


//! What is the difference between call, apply and bind?
// A good interview answer:
// call(), apply(), and bind() are methods used to control the this value of a function. call() and apply() execute the function immediately, while bind() returns a new function that can be executed later. The main difference between call() and apply() is that call() accepts arguments individually, whereas apply() accepts arguments as an array.