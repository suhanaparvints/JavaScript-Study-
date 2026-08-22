// An array is used to store
// multiple values in a single variable

let fruits1 = ["Apple", "Banana", "Orange", "Mango"]

console.log(fruits1)

//array can store different types of values
let data = ["Suhana", 20, true, 10.5]
console.log(data)

// array index
 let fruits = ["Apple", "Banana", "Orange", "Mango"]
console.log(fruits[0])// Apple
console.log(fruits[1])// Banana
console.log(fruits[2])// Orange
console.log(fruits[3])// Mango

// changing array element
fruits[1] = "Grapes"
console.log(fruits)

// array length 
let numbers = [10, 20, 30, 40, 50]
console.log(numbers.length) // 5
console.log(numbers[numbers.length - 1]) // 50

//adding element using push() to end of array
let fruits2 = ["Apple", "Banana"]
fruits2.push("Orange")
console.log(fruits2)

//removing element using pop() at the end of array
let fruits3 = ["Apple", "Banana", "Orange"]
fruits3.pop()
console.log(fruits3)
//let removed = fruits.pop()
// console.log(removed)

//Adds an element to the beginning using unshift()
let fruits4 = ["Banana", "Orange"]
fruits4.unshift("Apple")
console.log(fruits4)

//Removes the first element.
let fruits5 = ["Apple", "Banana", "Orange"]
fruits5.shift()
console.log(fruits5)

//array checking using isArray()
console.log(Array.isArray([1, 2, 3])) // true
console.log(Array.isArray(10)) // false
console.log(Array.isArray("Suhana")) // false

//Objects Inside an Array
let students = [
    {
        name: "Suhana",
        age: 20
    },
    {
        name: "Anu",
        age: 21
    },
    {
        name: "Riya",
        age: 22
    }
]
console.log(students[0].name) // Suhana
console.log(students[1].age) // 21