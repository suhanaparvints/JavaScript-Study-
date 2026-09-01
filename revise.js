// Normal Function
function greet(){
    console.log("suhana");
}
greet();

//Function Parameter & Argument
function multiply(a,b){
    return a*b;
}
console.log(multiply(4,5));
// OR //
// let result=multiply(4,5)
// console.log(result);

//Return Values

// Function Expression
const varName= function(a,b){  // stored in variable
    return a/b;  
}
console.log(varName(4,5));

//Arrow Function
const hello = (a,b) => a*b;
console.log(hello(10,10));

const Hello = (name)=>"Hello" + name;
console.log(Hello("suhana"));

//Default parameter
function myFunction(x,y){
if (y === undefined){
    y=2;
}
return x*y;
}
console.log(myFunction(4));

// !rest parameter
// let x = sum(4,5,6,7,8,9,10); // indefinite no. of arguments treat as an array

//spread syntax
const numbers = [10, 20, 30];
function addS(a, b, c) {
    return a + b + c;
}
//instead of writing:
//  console.log(add(numbers[0], numbers[1], numbers[2]));
//use spread syntax:
console.log(addS(...numbers));

//Spread with two 
function add(a, b, c, d) {
    return a + b + c + d;
}
const arr1 = [10, 20];
const arr2 = [30, 40];
console.log(add(...arr1, ...arr2));

//Rest Parameter
function adds(...numbers1) {
    console.log(numbers1);
}
adds(10, 20, 30);

//Calculate Sum
function adding(...numbers){
    let sum=0;
    for(const number of numbers){
        sum+=number;
    }
return sum;
}
console.log(adding(10,20,30));

// Rest with Normal Parameters
function student(name, age, ...subjects) {
    console.log(name);
    console.log(age);
    console.log(subjects);
}
student("Suhana", 20, "JavaScript", "Python", "Java");

//Callback Function
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
const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map(function(number) {
    return number * 2;
});

console.log(doubled);

//Higher Order Function (HOF)
function createGreeting(){
    return function(){
        console.log("Hello!");
    };
}
const greet4 = createGreeting();
greet4();

// Closure counter
function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}
const increment = counter();
increment();
increment();
increment();

//Closure with multiple function
function counters() {
    let count = 0;

    function increments() {
        count++;
        console.log(count);
    }

    function decrement() {
        count--;
        console.log(count);
    }

    return {
        increments,
        decrement
    };
}

const myCounter = counters();

myCounter.increments();
myCounter.decrement();
myCounter.increments();
