//Array and Display Array
const car=["BMW", "Benz","Oddy"];
console.log(car);

//Array can store Different Data Types
const data=[
    "suhana",
    20,
    true,
    null,
    { course: "MCA", age:20},
    [10,20,30]
];
console.log(data);

//Accesing Array Element
let cars =car[2]
console.log(cars);
//changing an Array Element
car[0]="Toyota"
console.log(car);
//Array Using New Keyword
const Cars = new Array("Saab","Volvo","BMW");
console.log(Cars);
//Converting Array -> String
console.log(Cars.toString());
//Display Array using JSON.stringify()
let text = JSON.stringify(Cars);
console.log(text);
//typeof
console.log(typeof[]); // typeof array[] is object
//!Array Properties - length
let details=["hello", "Am", "Suhana"];
console.log(details.length);
//Using Array Property Length We can Access the //! Last Element of Array
console.log(details[details.length - 1]);  //Suhana
//!changing the length
details.length=2; //reducing
console.log(details);
details.length=5; //increasing
console.log(details);

//!Array Methods

//! Adding & Removing Methods
const names =["Siraj", "Shemi", "Suhana", "Parvin"];
names.push("ts"); // Adding Element to the End
console.log(names);
names.pop();     // Removing Element from Last
console.log(names);
names.unshift("Family"); // Adding Element to First
console.log(names);
names.shift();         // Removing Element from First
console.log(names);

//! Searching Methods
const fruits=["Apple", "Banana", "Carrot", "Mango", "Apple"];
console.log(fruits.includes("Carrot")); // true //true or false
console.log(fruits.indexOf("Mango")); // 3 //index no. or -1
// console.log(fruits.indexOf("Dates")); //-1
console.log(fruits.lastIndexOf("Apple")); // last occurence of Apple's Index  // 4
//find() - Returns the first element that satisfies a condition. 
const numbers = [10, 20, 30, 40, 50, 19];
const result = numbers.find(num => num > 25); //30
console.log(result);
//findIndex() - Returns the index of the first matching element.
console.log(numbers.findIndex(num => num > 25)); //2
//findLast() - Returns the last element that satisfies the condition. (also work with a duplicate value in same array)
console.log(numbers.findLast(num => num > 20)); //50
//findLastIndex() - Returns the index of the last element that satisfies the condition. (also work with a duplicate value in same array)
console.log(numbers.findLastIndex(num => num > 20)); //4

//! Extracting & Modifying (Manipulation)
//slice() - Extracts part of an array without changing the original.
const planets= ["Mars", "Jupiter", "Uranus", "Earth"];
console.log(planets);
const output = planets.slice(1, 3); // slice(start, end) [end - is not included if we want we can add end or slice(2) ]
console.log(output);
const output1 =planets.slice(1);
console.log(output1);

//splice() - Used to remove, add, or replace elements. And modifies original
// slice(start(index value), deleteCount(), item1,item2, .... itemN)
planets.splice(0,2); // removing  (Mars & Jupiter removed) -> [uranus, Earth]
console.log(planets);
planets.splice(0,1, "Pluton"); // replacing (uranus replaced to pluton) -> [pluton, Earth]
console.log(planets); 
planets.splice(1,1, "Sun","Neptune", "Moon"); // removing and replacing  (Earth removed [1],deleteCount 1)
console.log(planets); 
planets.splice(4,4, "Earth"); // adding element using splice()
console.log(planets);

//! toSpliced 
// used to add, remove, or replace elements in an array without changing the original array.
//It is the non-mutating version of splice().
//array.toSpliced(start, deleteCount, item1, item2, ...)
const fruitss = ["Apple", "Banana", "Mango"];
const results = fruitss.toSpliced(1, 1);
console.log(results);
console.log(fruitss);


//concat() - Combines Array
const grade=["A", "B", "C", "Fail"]
const marks=[100, 80, 50, 20];
const total= grade.concat(marks);
console.log(total);

//join() - Convert an Array into String
const fruits1 = ["Apple", "Banana", "Mango", "Carrot"];
const result1 = fruits1.join(", ");
console.log(result1); //Apple, Banana, Mango, Carrot

//! fill() - method replaces all or selected elements of an array with a specified value.
//fill(value, start, end) [value - means changing value]
const numbers1 = [1, 2, 3, 4, 5];
numbers1.fill(0);
console.log(numbers1);  //[0,0,0,0,0]
const numbers2 = [1, 2, 3, 4, 5];
numbers2.fill(4, 2); // Fill from a specific index
console.log(numbers2); //[1,2,4,4,4]
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3);
numbers3.fill(10, 1, 4); //Fill within a range
console.log(numbers3);  //[1,10,10,10,5]


//! valueOf() - returns the primitive value of an object.

//!valueOf() is a JavaScript object method that returns the primitive value of an object and can be used during type conversion.
//valueof for an object
//with number
const num = new Number(10);
console.log(num.valueOf());
//with string
const text1 = new String("Hello");
console.log(text1.valueOf());
//valueOf() for an array 
const fruits3 = ["Apple", "Banana", "Mango"];
console.log(fruits3.valueOf());
console.log(fruits3.valueOf() === fruits3);  //true

//Example of Automatic Use
const num1 = new Number(10);
console.log(num1 + 5);  //15

//delete operator - removes the value but does not change the array's length.
//instead of delete we use splice()
const fruits4 = ["Apple", "Banana", "Mango"];
delete fruits4[1];
console.log(fruits4);

//Array.isArray() - is used to check whether a value is an array. //Array.isArray(value) // true/false
const fruits0 = ["Apple", "Banana", "Mango"];
console.log(Array.isArray(fruits0));   //true
//with string
const name = "Suhana";
console.log(Array.isArray(name)); //false
//with object
const person = {
    name: "Suhana",
    age: 20
};
console.log(Array.isArray(person));  //false

//!copyWithin()
//  is an array method used to copy a portion of an array to another position within the same array. It modifies the original array but does not change its length.
//array.copyWithin(target, start, end) [target → where to copy the elements, start → where copying starts (put them starting index 1), end → where copying stops (not included)]

const no=[1,2,3,4,5];
no.copyWithin(0,3);
console.log(no);
no.copyWithin(1,3,5);
console.log(no);
no.copyWithin(-2,0,2); //negative indexes
console.log(no);

//Advanced Array Operation in JS
//! sort() - sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings in ascending order.sort() Changes the Original Array
//used to arrange elements of an array in a particular order
// Sorting Strings
const fruit = ["Mango", "Apple", "Orange", "Banana"];
fruit.sort();  // alphabetically sorted
console.log(fruit);
//Sorting Numbers
const number=[10,11,9,8,23];
number.sort();
console.log(number);
//Why? By default, sort() converts elements to strings and compares them.
//So for numbers, use a compare function.
//Ascending Numbers ⭐
number.sort((a, b) => a - b);  
console.log(number);
//(a, b) => a - b work? 
// a - b < 0  → a comes before b
// a - b > 0  → b comes before a
// a - b = 0  → keep their relative order
//Descending Numbers ⭐
number.sort((a, b) => b - a);  
console.log(number);

//Sorting Without Changing the Original. You can make a copy first:
const numbers11 = [30, 10, 20];
const sorted = [...numbers11].sort((a, b) => a - b);
console.log(sorted);
console.log(numbers11);

//Sorting Objects ⭐⭐⭐
const students = [
    { name: "John", age: 25 },
    { name: "Alex", age: 20 },
    { name: "Sam", age: 23 }
];
students.sort((a, b) => a.age - b.age); //Ascending order of age
console.log(students);
students.sort((a, b) => b.age - a.age); //descending  of age
console.log(students); 
students.sort((a, b) => a.name.localeCompare(b.name));  // This sorts names alphabetically.
console.log(students);

//! toSorted() - returns a new sorted array without changing the original array.
const number1 = [30, 10, 20];
const sorted2 = number1.toSorted((a, b) => a - b);
console.log(sorted2);
console.log(number1);

//! reverse() - reverses the elements of an array in place and returns the same array. It modifies the original array.
//reverse numbers
const numbers13 = [1, 2, 3, 4, 5];
numbers13.reverse();
console.log(numbers13);
//reverse string
const fruits14 = ["Apple", "Banana", "Mango"];
const result2 = fruits14.reverse();
console.log(result2);

//! toReversed() - Reverse Without Changing the Original.
const fruits15 = ["Apple", "Banana", "Mango"];
const result3 = fruits15.toReversed();
console.log(result3);
console.log(fruits15);

//! Reverse a String Using an Array 
//works on arrays, not directly on strings.
const word = "hello";
const reversed = word.split("").reverse().join("");
console.log(reversed);
//split an string const word = "hello";
const word1 = "hello";
const reversed5 = word1.split("");
//join()
// const reversed5 = word1.split("").join("");
console.log(reversed5);

//Reverse Using Negative Indexing.
const numbers4 = [10, 20, 30, 40];
console.log(numbers4.at(-1)); // at(-1) only gets the last element. It doesn't reverse the array.



//! flat()
// flat() is an array method used to remove nested array levels and create a flatter array. 
// ⭐ Interview definition
// flat() creates a new array by recursively concatenating elements from nested arrays up to a specified depth.By default, it flattens one level and does not modify the original array.
const numbers0 = [6, 7, [8, 9], 10];
const result0 = numbers0.flat();  //[6,7,8,9,10]]
console.log(result0);

//flat() removes one level of nesting.
//Multiple Nested Arrays
const numbers9 = [1, [2, [3, 4]]];
const result9 = numbers9.flat();
console.log(result9);
// flat(2) ⭐
// To flatten two levels:
console.log(numbers9.flat(2));
//flat(Infinity) ⭐
const numbers8 = [1, [2, [3, [4, [5]]]]];
console.log(numbers8.flat(Infinity));
//flat() with Empty Slots - removes empty slots
const numbers7 = [1, , 3];
console.log(numbers7.flat());
//flat() with string
const data1 = ["Hello", ["JavaScript", "World"]];
console.log(data1.flat());

//! at() - Gets an element by index.
console.log(fruits1.at(2)); //mango
console.log(fruits1.at(-1));  //! negative indexing

//! flatMap()

/* Functional JavaScript ⭐⭐⭐
forEach()
map()
filter()
find()
some()
every()
reduce()
These are higher-order array methods because they accept callback functions. */

//! forEach()
// forEach() executes a function once for each element.
const nums=[10,20,30,40];
nums.forEach(function(numbers){
    console.log(numbers);
});
//Arrow Function in forEach()
nums.forEach(numbers =>{
console.log(numbers);
});
//forEach() with index and value
nums.forEach((num,index)=>{
    console.log(index, num); //(index, value)
});
//forEach() in Callback Parameter return index,value and array
nums.forEach((num,index,nums)=>{
console.log(index,num,nums);  //(index,value, array)
});

//! map() - Transform every element ⭐⭐⭐
// creates a new array by changing each element.
const books = new Map([["javascript", "JS"], ["html", "HTML"], ["css", "CSS"]]);
books.set("java", "JAVA");  //adding value using Map.set()
console.log(books);
books.set("java", "Robust") // changing value using Map.set()
console.log(books);
books.get("html");  // get value of key using Map.get()
console.log(books);
console.log(typeof(books));  // typeof Map object
//instanceof Map //true
books.delete("java"); //delete key value using Map.delete()
console.log(books);
// books.has("javascript"); // return true/false when the key exist
// console.log(books);
books.clear();  // remove all elements using Map.clear()
console.log(books);

//! Object as Keys
const apples={name:"Apple"};
const bananas={name:"Bananas"};
const orange={name:"Orange"};
//create a Map
const fruites=new Map();
//add new elements to map
fruites.set(apples, 100);
fruites.set(bananas, 300);
fruites.set(orange, 500);
//output
console.log(apples);
console.log(bananas);
console.log(orange);
console.log(fruites);
//Remember the key is an object(apples) not strings("apples")

// Real Example of Map
//doesn't modify the original array.
const number2=[10,9,8,7,6,5];
const doubled=number2.map(num=>{
    return num*2;
});
console.log(doubled); // [20,18,16,14,12,10]

//! filter() - Select elements ⭐⭐⭐
//creates a new array containing only the elements that satisfy a condition.
const newNums=[1,2,3,4,5,6];
const even=newNums.filter(num=>num%2==0);
console.log(even);  //[2,4,6]
// Example with objects of filter()
const students0=[
    {name:"suhana", age:20},
    {name:"parvin", age:14},
    {name:"suhu", age:20.5}
];
const adult=students0.filter(students0 => students0.age>=18);
console.log(adult);

//!reduce() — Reduce to one value ⭐⭐⭐
//processes all elements and produces one final value.
// accumulate values into any data type, including numbers, strings, booleans, objects, and arrays
// Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//currentIndex, arr, initialValue are optionals
const nameu=[10,20,30,40];
const sum=nameu.reduce((total,num)=>{
    return total+num;
}, 0);
console.log(sum);   //100

// reduce() in array object
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];
const totals = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);
console.log(totals);    //73000

//Chaining ⭐⭐⭐⭐
//you'll start using them together.
const numbers00 = [1, 2, 3, 4, 5, 6];
const results00 = numbers00.filter(num => num % 2 === 0).map(num => num * 10);
console.log(results00);  //[20,40,60]

//! some() - Check at least one matches condition and return boolean(true / false)
const numb=[1,3,4,8];
const results1=numb.some(num => num%2===0);
console.log(results1);    //true

//! every() - Check all elements that matches the condition and returns boolean(true / false)
const numr=[1,3,4,5,8,10];
const results2 =numr.every(num => num%2===0);
console.log(results2);  // false 

const numrs=[2,4,6,8];
const results12 =numrs.every(num => num%2===0);
console.log(results12);  // true

