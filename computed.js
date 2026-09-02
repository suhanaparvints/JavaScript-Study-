//! Computed Properties
// Computed properties allow you to use an expression or variable to dynamically determine an object's property name.
//Syntax: square brackets [].
//Normal Property
const name07 = "Suhana";
const person07 = {
    name07: name07
};
console.log(person07);

//Computed property
//Here js evaluates property
const property = "name";
const person08 = {
    [property]: "Suhana"
};
console.log(person08);
//Why are they called "computed"?
// Because JavaScript computes/evaluates the expression inside [] to determine the property name.
//Variable as a Property Name
const key = "age";
const value = 20;
const person = {
    [key]: value
};
console.log(person);

//Using Expressions
const person0 = {
    ["first" + "Name"]: "Suhana"
};
console.log(person0);

//Using a Function
function getKey() {
    return "name";
}
const person1 = {
    [getKey()]: "Suhana"
};
console.log(person1);

//Dynamic Property Names ⭐⭐⭐
const field = "email";
const user = {
    [field]: "suhana@example.com"
};
console.log(user);

//Creating Dynamic Objects
const key1 = "name";
const key2 = "age";
const key3 = "city";

const person2 = {
    [key1]: "Suhana",
    [key2]: 20,
    [key3]: "Dubai"
};
console.log(person2);

//Computed Properties with User Input
//This is useful when a property name comes from somewhere dynamically.
const propertyName = "username";
const propertyValue = "Suhana";
const user1 = {
    [propertyName]: propertyValue
};
console.log(user1);

//Computed Properties + Shorthand
const name5 = "Suhana";
const key5 = "username";

const user5 = {
    [key5]: name5
};
console.log(user5);

//Computed Properties with Numbers
//Property names can also be computed from numbers.
const number = 1;
const obj = {
    ["item" + number]: "Laptop"
};
console.log(obj);

//Multiple Dynamic Properties
const first = "firstName";
const second = "lastName";

const person8 = {
    [first]: "Suhana",
    [second]: "Parvin"
};
console.log(person8);

//Computed Properties
// Computed property names allow us to dynamically create object property names using expressions inside square brackets [].