
// JAVASCRIPT OBJECT

const person = {
    Name: "Suhana",
    age: 20,
    gender: "female",
    place: "kerala"
}

// ACCESSING OBJECT PROPERTIES

// Dot notation
console.log(person.Name) // Suhana
// Bracket notation
console.log(person["age"]) // 20

// ADDING NEW PROPERTIES
person.email = "suhana@gmail.com"
person.course = "MCA"

// RENAMING A PROPERTY
person.address = person.place
delete person.place

// UPDATING A PROPERTY
person.age = 21

// DELETING A PROPERTY
delete person.email

// ARRAY INSIDE OBJECT
person.skill = ["HTML", "CSS", "JAVASCRIPT"]
person.skill.push("TYPESCRIPT") // Adding a value to the array
console.log(person.skill)
// ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT"]

// Accessing a specific skill
console.log(person.skill[1]) // CSS

// OBJECT INSIDE OBJECT
person.address = {
    city: "irinjalakuda",
    state: "kerala",
    pincode: 680125
}

// Display complete address
console.log(person.address)
// Access specific value
console.log(person.address.city)
// irinjalakuda

// FUNCTION INSIDE OBJECT

person.greet = function() {
    console.log(`Hello ${this.Name}, nice to meet you`)
}

// Calling the function
person.greet()
// Hello Suhana, nice to meet you

// DISPLAY COMPLETE OBJECT
console.log(person)