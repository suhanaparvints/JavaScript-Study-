let a=1, b=2, c=3;
let sum= a+b+c;
console.log(sum);

let d = null;
console.log(typeof d);

let v = "John";        // x is a string
let w = new String("John");  // y is an object
console.log(v==w); // v & W are Equal == true


let x = "John";        // x is a string
let y = new String("John");  // y is an object
console.log(x===y);   // v & W are Not Equal === false 

let e = new String("John");        // x is a string
let f = new String("John");  // y is an object
console.log(e===f);

let myNumber = 2;
// Execute until Infinity
let txt = "";
while (myNumber != Infinity) {
   myNumber = myNumber * myNumber;
   txt = txt + myNumber + "\n";
}
console.log(txt);

let s = 2/0;     //infinity
let t = -2/0;   //-infinity
console.log(s+ "\n" +t);


// Create an Object
const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue" 
});
console.log(person.firstName+ " " +person.lastName + " " +"is"+ " "+person.age + " "+ "years old");

// Create an Object with backtick
const person1 = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue" 
});
console.log(`${person1.firstName} ${person1.lastName} is ${person1.age} years old`);

// object method 1

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getId: function() {
    return this.id;
  }
};

let number = person2.getId();
console.log(number);

//object method 2 accesssing using ()

const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person3.fullName());

let x1 = this;
console.log(x1);


//this in a function()

function myFunction() {
  return this;
}
console.log(myFunction());

//Check if a Property Exists

const person4 = {
  firstName: "John",
  lastName: "Doe"
};

let result = ("firstName" in person4);
console.log(result);

// Create an Object
const person5 = {
  name: "John",
  age: 30,
  city: "New York"
};

let text1 = person5;
console.log(text1);

// Create an Object
const person6 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text = "";
for (let x in person6) {
  text += person6[x] + " ";
};
console.log(text);


// Create an Object
const person7 = {
  name: "Doe",
  age: 60,
  city: "Newzeland"
};

// Create an Array from the Properties
const myArray = Object.values(person7);

// Stringify the Array
let text2 = myArray.toString();
console.log(text2);

//constructor 

function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}
const student1 = new Student("Suhana", 20, "MCA");
const student2 = new Student("Rahul", 21, "BCA");
const student3 = new Student("Amina", 20, "MCA");

student1.changeName = function (name) {
  this.lastName = name;
}
student1.changeName("parvin")
console.log(student1);
console.log(student2);
console.log(student3);
