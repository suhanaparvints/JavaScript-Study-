// ⭐ What is Object Destructuring?
// Object destructuring is a JavaScript feature that allows you to extract properties from an object and store them in variables easily.
//Syntax: const { property1, property2 } = object;
// ⭐ Important Rule
// The variable name normally matches the object property name.
//Destructure only what you need.
// Object
//    ↓
// { property1, property2 }
//    ↓
// Variables

//object destructing
const person = {
    name: "Suhana",
    age: 20,
    city: "Kochi"
};
const { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);

//Changing the Variable Name
//Syntax: const { objectProperty: newVariableName } = object;
const Students = {
    names: "Suhana",
    ages: 20
};
const { names: userName, ages: userAge } = Students;
console.log(userName);
console.log(userAge);
//Default Values
// What happens if the property doesn't exist? 
const persons = {
    namee: "Suhana"
};
const {namee, agee}=persons; //age is not exist
console.log(agee);//undefined
console.log(namee);
//so we can assign it as null / default value
// agee=null;  //null
// const {namee, agee=20}= persons; //default value

//Destructuring Nested Objects
const personu = {
    names: "parvin",
    ages: 20,
    cities: "Thrissur",
    address:{
        country:"India",
        state:"Kerala"
    }
};
const { names, ages, address:{country,state}}= personu;
console.log(names);
console.log(ages);
console.log(state);
console.log(country);
//Destructuring While Keeping the Nested Object
const stuudent = {
    naame: "Suhana",
    aaddress: {
        ccity: "Kochi",
        sstate: "Kerala"
    }
};

const {naame, aaddress, aaddress: { ccity }} = stuudent;
console.log(naame);
console.log(aaddress);
console.log(ccity);

//Destructuring Function Parameters ⭐⭐⭐
// This is extremely important in React, Node.js, APIs, and modern JavaScript.
function displayuser(user) {
    console.log(user.name);
    console.log(user.age);
}
//or
//ou can destructure directly in the parameter:
function displayUser({ name, age }) {
    console.log(name);
    console.log(age);
}
const user = {
    name: "Suhana",
    age: 20
};
displayUser(user);
//or
displayuser(user);

//Destructuring Function Return Values
function getNumbers() {
    return [10, 20, 30];
}

const [x, y, z] = getNumbers();
console.log(x); // 10
console.log(y); // 20
console.log(z); // 30
//or return an object
function getUser(){
    return{
        name1:"shemi",
        age1:54
    };
}
const {name1, age1}=getUser();
console.log(name1);
console.log(age1);

//Destructuring in Loops
const user2=[
    {name2: "siraj", age2:61},
    {name2:"shemi", age2:54}
];
//without destructing
// for(const user of user2){
//     console.log(user2.name2);
//     console.log(user2.name2);
// }
//with destructing
for(const {name2, age2}of user2){
    console.log(name2, age2);
}

//Destructuring with map()
const users3=[
    {name3: "sugu", age:20},
    {name3: "aisha", age:15}
];
//Instead of:
//users.map(user => user.name);
//write:
const names0 = users3.map(({name3})=>name3);
console.log(names0);

//Destructuring with const and let
const persoon = {
    name4: "Suhana",
    age4: 20
};
const { name4 } = persoon;
//or
let { age4 } = persoon;
age4 = 21;
console.log(age4);

//Destructuring with Existing Variables
let firstname;
let ageofperson;
const persn={
    firstname:"suhana parvin",
    ageofperson:20.5
};
({firstname, ageofperson}= persn);
console.log(firstname);
console.log(ageofperson);

//ADVANCED TOPIC
//Destructuring with Computed Property Names
//use a variable as the property name:
const persson = {
    name: "Suhana",
    age: 20
};
const property = "name";
const { [property]: value } = persson;
console.log(value);

 

// Rest Operator with Object Destructuring
const usery = {
    namey: "Suhana",
    agey: 20,
    coursey: "MCA",
    cityy: "Thrissur"
};

const { namey, ...detailsy } = usery;
console.log(namey);
console.log(detailsy);



//Array destructuring
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a); // 10
console.log(b); // 20

//Skip Array Elements
const numberss = [10, 20, 30, 40];
const [e, , f, g] = numberss;
console.log(e); // 10
//The second element 20 is skipped.
console.log(f); // 30
console.log(g); // 40

//Array Destructuring with Default Values
const numbersa = [10, 20];
const [h, i, j = 30] = numbersa;
console.log(h); // 10
console.log(i); // 20
console.log(j); // 30

//Array Rest Destructuring
const numberr = [10, 20, 30, 40, 50];
const [first, second, ...remaining] = numberr;
console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]


//array destructuring Swapping Variables
// One of the most useful applications of array destructuring is swapping values.
//old
let k = 10;
let l = 20;
let temp = k;
k = l;
l = temp;
console.log(temp); //10
//using destructuring
let m=10;
let n=20;
[m,n]=[n,m];
console.log(m); //20
console.log(n); //10

//String Destructuring
const name0="Suhana";
const [first1, second2, third3]=name0;
console.log(first1);
console.log(second2);
console.log(third3);

//Function Destructuring
function displayPerson(person1){
console.log(person1.name);
console.log(person1.age);
}
const person1={
    name:"suhana",
    age:20
}
displayPerson(person1);

//Array Destructuring in Function Parameters
function displayNumbers([a,b,c]){
    console.log(a);
    console.log(b);
    console.log(c);
}
displayNumbers([10,30,50])

//Nested Object + Array Destructuring
const station={
    writing1:"pen",
    writing2:"pencil",
    book:["plainbook", "linedbook"],
    pens:[1,2,3],
    paint:{
        brush:"small",
        brush2:"large"
    }
};
const {writing1,book:[classmates, papergrid],pens:[cell, pinpoint, elkos], paint:{brush2}}=station;
console.log(writing1);
console.log(cell);
console.log(pinpoint);
console.log(elkos);
console.log(papergrid);
console.log(brush2);

//Destructuring with for...of
const users = [
    { name: "Suhana", age: 20 },
    { name: "Rahul", age: 21 },
    { name: "Anu", age: 19 }
];
for (const { name, age } of users) {
    console.log(name, age);
}

// Destructuring with forEach()
const users0=[
    {name:"suhana", age:20},
    {name:"ashly", age:21}
];
users0.forEach(({name, age})=>{
    console.log(name,age);
})