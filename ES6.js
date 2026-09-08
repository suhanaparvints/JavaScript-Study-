//let & const
let age = 20;
age = 21;
const name = "Suhana";
console.log(name);
// name = "Aisha"; ❌
//const does not make objects/arrays completely immutable
const user = {
    name: "Suhana"
};
user.name = "Aisha"; // ✅
console.log(user.name);


//Arrow Functions
//normal function
function add(a, b) {
    return a + b;
}
//arrow
const add1= (a,b)=>{
    return a+b;
};
//or
const add2=(a,b) => a+b;
//or Single parameter:
const square= x => x*x;

//Template Literals
let name1 = "Suhana";
let age1 = 20;
console.log(`My name is ${name1} and I am ${age1}`);
//Template Literals also write multiline strings:
const message=`Hello Suhana
Welcome to JavaScript`;
console.log(message);

//Default Parameter
function greet(name="user"){
    console.log(`Hello ${name}`);
}
greet("suhana");
greet(); //default

//Destructuring
//Array destructuring
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a); // 10
console.log(b); // 20

//Object Destructuring
const person={
    name2:"suhana",
    age2:20,
address:{
    city:"Thrissur",
    state:"kerala"
}
};
const {name2, age2, address, address:{city,sate}}= person;
console.log(person);
console.log(name);
console.log(age);
console.log(address);

//spread operator - Spread expands an iterable/object.
//common adding
const num=[10,20,30];
function add(a,b,c){
    return a+b+c;
}
console.log(add(num[0],num[1],num[2]));

//using spread operator in array with function
const num3=[20,30,40];
function add3(d,e,f){
    return d+e+f;
}
console.log(add3(...num3));

//Spread with two 
function add4(a, b, c, d) {
    return a + b + c + d;
}
const arr1 = [10, 20];
const arr2 = [30, 40];
console.log(add4(...arr1, ...arr2));

//spread operator with object
const student={
    name:"Suhana",
    age:"20"
};
const updateUser={
    ...student,
    age:20.5
};
console.log(updateUser);

//rest Parameter - Rest collects multiple arguments into an array.

function sum(...numbers){
    console.log(numbers);
}
sum(10,20,30,40,50,60);

// Rest with Normal Parameters
function student1(name, age, ...subjects) {
    console.log(name);
    console.log(age);
    console.log(subjects);
}
student1("Suhana", 20, "JavaScript", "Python", "Java");

//object Shorthand/Literals
//computed property
//classes
//modules
//promises
//for..of
//map
//set
//symbol
//Iterators
//Generators
//Proxy
