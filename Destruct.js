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

const {
    naame,
    aaddress,
    aaddress: { ccity }
} = stuudent;
console.log(naame);
console.log(aaddress);
console.log(ccity);

///Destructuring Function Parameters ⭐⭐⭐
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

 