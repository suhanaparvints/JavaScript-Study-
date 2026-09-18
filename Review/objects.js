const person={
    name:"suhana",
    age: 20,
    gender:"female"
}
console.log(person);
console.log(person.name);
console.log(person["gender"]);
//add
person.city="thrissur"
console.log(person);
//delete
delete person.age;
console.log(person);
//change
person.name="suhana parvin";
console.log(person);
//bracket notation
const property="name"
console.log(person[property]);
//nested object
const student={
    name:"suhail",
    age:28,
    gender:"male",
    address:{
        city:"thrissur",
        place:"ijk"
    }
};
console.log(student);
student.address.pin=680125;
console.log(student.address);

//object with function
const greeting={
    first:"welcome",
    second:"hello how are you",
    greet:()=>console.log("hello suhana")
}
console.log(greeting);
greeting.greet();

//spread operator in object
const fruit1={
    a:"apple",
    b:"banana",
    c:"carrot"
};
const updatedfruit = {
    ...fruit1,
       d:"dates"
};
console.log(updatedfruit);

//rest operator in objects
const veg={
    a:"amabzam",
    b:"biscut",
    c:"carrotss"
}
const {a,...vegitals}=veg;
console.log(a);

//object methods
const fruits={
    G:"grapes",
    R:"rambootan",
    L:"litchi",
    B:"blueberry"
}
console.log(fruits);
//Object.keys()
console.log(Object.keys(fruits));
//Object.values()
console.log(Object.values(fruits));
//Object.entries()
console.log(Object.entries(fruits)); 
//Object.hasOwn() - only checks in keys of object, with object name
console.log(Object.hasOwn(fruits,"G"));
//Object.assign()
const moods={
    happy:"yes",
    sad:"no"
}
console.log(Object.assign(fruits,moods));
moods.mood="normal";
const edit=Object.assign({},fruits);
console.log(edit);

//Object.create() - created another object from object with its own prototype
const persons={
    name:"suhana",
    age:20
}
const create=Object.create(persons);
console.log(create.name);

//in function
const persons1={
    greet:()=>console.log("hello suhana parvin")
}
const greets=Object.create(persons1);
persons1.greet();

//Object.freeze() makes an object non-modifiable. can't add, delete, or change existing properties
// Prevent Changes.
const fruits2={
    A:"Apple",
    B:"Banana",
    C:"carrot"
}
Object.freeze(fruits2);
fruits2.D="Dates";
fruits2.A="Avacado";
delete fruits2.B;
console.log(fruits2);
//nested can change
const fruits3={
    A:"Apple",
    B:"Banana",
    C:"carrot",
    D:{
    d:"Dates",
    E:"eat"
    }
}
Object.freeze(fruits3)
console.log(fruits3);
fruits3.D.E="elak";
console.log(fruits3);
delete fruits3.D.E
console.log(fruits3);

//Object.isFrozen() - Check whether frozen.
//returns true/false
console.log(Object.isFrozen(fruits3));

//Object.seal() - Prevent Adding / Removing. (in nesting add/remove wil work)
Object.seal(fruits3)
fruits3.A="fruits"
delete fruits3.D
console.log(fruits3);
fruits3.D.d="d for dates" // work changing existence
console.log(fruits3);
//Object.isSealed()
console.log(Object.isSealed(fruits3));

//Object.fromEntries() — Entries → Object
//converts an iterable of [key-value] pairs into an {object}.
const entries=[
      ["name", "suhana"],
      ["age", 20],
      ["city", "kochi"]
];
console.log(Object.fromEntries(entries));