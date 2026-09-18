console.log(typeof "10");
console.log(typeof 10);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof NaN);
console.log(NaN === NaN);        // not equal to itself using either == or ===
console.log(Number.isNaN(NaN));    // false
0 == false                        // true
0 === false                      // false

console.log("5" - 2);          // Type Coercion- converts "5" into the number 5.

console.log(true == 1);
console.log(true === 1);

// post increment 
let x = 5;
console.log(x++);

// pre-increment
let y = 5;
console.log(++y);

// ternary
let age=20;
let result= age>=18?"Adult": "Child";
console.log(result);

//function
function add(a,b){
    return a+b;
}
let output= add(10,120);
console.log(output);

//declaration
function add(a, b) {
    return a + b;
}
console.log(add(10,20));

//expression
const add3 = function(a, b) {
    return a + b;
};
console.log(add3(50,50));

//anonymous
const greet = function() {
    console.log("Hello");
};
console.log(greet());

//arrow function
const add1=(c,d)=>{
    return 80+90;
}

// implicit return
const add4 = (a, b) => 10 + 60;
console.log(add(5, 10));

//one parameter
const square = x => x * x;

//zero parameter
const greet3 = () => {
    console.log("Hello");
};

//default parameter
function greet4(name = "Guest") {
    console.log("Hello " + name);
}

greet4();


const fruits1=["banana","apple"];
console.log(fruits1);