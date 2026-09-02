//Optional Chaining ?.
//allows you to safely access a property, method, or array element when a value might be null or undefined.
//Instead of causing an error, JavaScript returns undefined.
//Syntax: object?.property
const person = {
    name: "Suhana"
};
console.log(person.address?.city); //undefined
//Without ?.:
// console.log(person.address.city); //TypeError: Cannot read properties of undefined
//Optional Chaining with Nested Objects ⭐⭐⭐
const user = {
    name: "Suhana",
    profile: {
        address: {
            city: "coc"
        }
    }
};
console.log(user?.profile?.address?.city);  //kochi

//Optional Chaining with null
const user0 = null;
console.log(user?.name); //undefined
//Optional Chaining with undefined
let users;
console.log(users?.name); //undefined Because: user === undefined

//Optional Chaining with Arrays
//Syntax: array?.[index]
const users1 = [
    "Suhana",
    "Aisha",
    "Sara"
];
console.log(users1?.[0]);
// Array That Doesn't Exist
// let users;
// console.log(users?.[0]); //undefined

//Optional Chaining with Dynamic Properties
//Syntax: object?.[variable]
const user2 = {
    name: "Suhana",
    age: 20
};
const key = "name";
console.log(user2?.[key]);

// Optional Chaining with Methods
//Syntax: object.method?.()
const user4 = {
    name: "Suhana",

    greet() {
        console.log("Hello!");
    }
};
user4.greet?.();

//Optional Chaining Does Not Work on the Left Side of Assignment
//user?.name = "Suhana"; //❌ Invalid.

//Optional Chaining with Objects Inside Arrays
const users5 = [
    {
        name: "Suhana",
        address: {
            city: "ijk"
        }
    }
];
console.log(users5?.[0]?.address?.city);
//This combines:
// array access
// object property access
// optional chaining

//Optional chaining (?.) is a JavaScript operator that allows us to safely access properties, methods, or array elements of a value that may be null or undefined. Instead of throwing an error, it returns undefined.