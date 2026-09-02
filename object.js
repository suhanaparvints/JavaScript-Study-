//object in JS
//is a collection of key-value pairs used to store related data and functionality.
const person={
    name: "Suhana",
    age: 20,
    city:"kochi"
};
console.log(person);
//Accessing Object
// using Dot Notation
console.log(person.name);
//using Bracket Notation
console.log(person["age"]);
//useful when the property name is stored in a variable.
const property = "city";
console.log(person[property]);

// Adding Property
person.country="India";
console.log(person);
//Changing Property
person.age=20.5;
console.log(person);
//Deleting Property
delete person.city;
console.log(person);

//Nested Objects ⭐
//object contain another object.
const personS={
    firstName: "suhana",
    lastName:"Parvin",
    address: {
        house:"Thaliyappadath",
        city:"Thrissur",
        state:"kerala"
    }
}
console.log(personS);
console.log(personS.address.city);

//Object with a Method
//an Object can contain Functions() 
const persona={
  name:"suhana",

greet:function(){
     console.log("Hello!");
    }
}
persona.greet();

//Object Destructuring ⭐
//Extract properties into variables.
const fruits={
    a:"apple",
    b:"banana"
};
const {a,b}= fruits;
console.log(a);
console.log(b);
console.log(fruits);

//Object Shorthand
const name="Suhana";
const age=20;
const personn={
    name:name,
    age:age
};
console.log(personn);
// instead of we can write
const persone={
    name,age
};
console.log(persone);

// Spread operator in object
const fruit={
    a:"avocado",
    b:"bamboo cane",
    c:"coco"
};
const updatedfruit={
    ...fruit,
    d:"dates"
};  // spread operation
console.log(updatedfruit);

// Object Methods ⭐⭐⭐
const games={
    game1:"mini miltia",
    game2:"real race ",
    game3:"level devil",
    game4:"among us"
}
console.log(games);
//! Object.keys() - Gets the property [Keys] or names.
console.log(Object.keys(games));
//! Object.values() - Get the property [values].
console.log(Object.values(games));
//! Object.entries() - Get [Key-Value] Pairs.
console.log(Object.entries(games));
//! Object.assign() - Copy/Merge Objects.
//copies properties from one or more source objects into a target object.and later sources overwrite properties with the same key.
//Object.assign(target, source1, source2);
//Think: source → properties → target
const student={
    name:"suhana"
};
const details={
    age:20,
    city:"Thrissur"
};
//merge Two object
console.log(Object.assign(student,details));

//here students modified
student.name="parvin";
//  If you don't want to modify the original:
//copy the object student into {}
const results=Object.assign({},student);
//{} -is the target object.
//student -is the source object.
//So the properties of student are copied into {}.
console.log(results);

//multuple object merge using Object.assign()
const obj1 = { name: "Suhana" }; 
const obj2 = { age: 20 };
 const obj3 = { city: "Thrissur" };
 const obj4={ country:"india"};
 const result=Object.assign(obj1,obj2,obj3,obj4);
 console.log(result);

//! Object.create() - Create an object from another object
//creates a new object whose prototype is the object you provide.
//Syntax: Object.create(prototypeObject);
//It is commonly used when working directly with JavaScript's prototype inheritance system.
const humans={
    greet(){
        console.log("Hello!");
    }
};
const Student = Object.create(humans);
Student.greet();
// Then it checks student's prototype.
// It finds greet() humans.
//Example 2: Properties
const Person={
    name:"Suhana Parvin"
};
const Students=Object.create(Person); //created another object from object with its own prototype
console.log(Students.name);

//! Object.hasOwn() - Check if Object Owns a Property.
//rather than inheriting it from its prototype. It returns a boolean.
//checks whether a property directly belongs to an object.
//Syntax: Object.hasOwn(object, property); 
// returns True / False
const persoon = {
    name: "Suhana",
    age: 20
};
console.log(Object.hasOwn(persoon, "name"));
console.log(Object.hasOwn(persoon, "age"));
console.log(Object.hasOwn(persoon, "city"));
//Example with Object.create()
const persson = {
    name: "Suhana"
};
const studenT = Object.create(persson);
console.log(studenT.name);
console.log(Object.hasOwn(studenT, "name")); //false because it doesn't have its own property

//! Object.freeze() - Prevent Changes.
//makes an object non-modifiable. can't add, delete, or change existing properties
//makes an object immutable at the top level by preventing properties from being added, deleted, or modified. It is shallow, so nested objects can still be modified unless they are also frozen.
const Persons = {
    name: "Suhana",
    age: 20
};
Object.freeze(Persons);
Persons.age = 25;
Persons.city = "Kochi";
delete Persons.name;
console.log(Persons);

// Object.freeze() is shallow
//Because only the top-level object was frozen.
// The nested address object wasn't frozen.
const personss = {
    name: "Suhana",
    address: {
        city: "Kochi"
    }
};
Object.freeze(personss);
personss.address.city = "Thrissur";  // Thrissur
console.log(personss.address.city);

//! Object.isFrozen() - Check whether frozen.
//returns true/false
console.log(Object.isFrozen(Persons));

//! Object.seal() - Prevent Adding / Removing.
//prevent adding new properties
//prevent deleting existing properties
//existing properties can still be modified.
const Studentss={
    name:"Aysha",
    age:"15",
};
Object.seal(Studentss);
Studentss.age=20.5;  // it works because existing properties can change
Studentss.city="Kodungallur"; // doesn't work
delete Studentss.name        // doesn't work
console.log(Studentss);

//! Object.isSealed() - Check whether sealed
//returns true/false
console.log(Object.isSealed(Studentss));

//! Object.fromEntries() — Entries → Object
//converts an iterable of [key-value] pairs into an {object}.
//Most commonly, we use it with arrays of entries.
//Syntax: Object.fromEntries(entries);
const entries=[
      ["name", "suhana"],
      ["age", 20],
      ["city", "kochi"]
];
console.log(entries);
const prson= Object.fromEntries(entries);
console.log(prson);

//! ⭐ What is Object Destructuring?
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
const personu = {
    names: "Suhana",
    ages: 20,
    cities: "Kochi"
};
const { names, ages, cities } = personu;
console.log(names);
console.log(ages);
console.log(cities);

//Changing the Variable Name
//Syntax: const { objectProperty: newVariableName } = object;
const { names: userName, ages: userAge } = personu;
console.log(userName);
console.log(userAge);
//Default Values
// What happens if the property doesn't exist? //undefined
//we can assign it as null

//Destructuring Nested Objects
const studen = {
    namee: "Suhana",
    age: 20,
    addresss: {
        citys: "Kochi",
        state: "Kerala"
    }
};
const {namee, addresss: { citys, state }} = studen;
console.log(namee);
console.log(citys);
console.log(state);

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

//! Object Shorthand
// Object shorthand allows us to create object properties without repeating the property name and variable name when both have the same name. 
// This was introduced with ES6.
//NORMAL way
const name0 = "Shemi";
const age0 = 54;
const city0 = "Kodungallur";
const person0 = {
    name0: name0,
    age0: age0,
    city0: city0
};
console.log(person0);

//SHORTHAND way
const name01 ="siraj";
const age01="61";
const city01="Irinjalakuda";
const person01={
    name01,
    age01,
    city01
};
console.log(person01);

//Combining Shorthand with Normal Properties
const name02 = "Suhail";
const age02 = 28;

const person02 = {
    name02,
    age02,
    city02: "Porathissery"
};
console.log(person02);

// Shorthand + Computed Properties
const name03 = "TS";
const property03 = "age";
const value03 = 11;
const person03 = {
    name03, //shorthand
    [property03]: value03 //computed property
}; 
console.log(person03);

// Object Shorthand with Functions
//Normal
const person04 = {
    name04: "Suhana",
    greet: function() {
        console.log("Hello!");
    }
};
person04.greet();

//Shorthand way
const person05 = {
    name05: "Suhana",
 greet() {
        console.log("Hello");
    }
};
person05.greet();

