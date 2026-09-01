// for Loop

// Display numbers 1 through 5.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//Even Numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//sum
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

//sum of all even numbers from 1 to 10.
let sum1 = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum1 += i;
  }
}
console.log(sum1);
//Count Instead of Sum - counts how many even numbers exist between 1 and 10.
let Count = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    Count++;
  }
}
console.log(Count);

//Count Numbers Based on a Condition
const numbers = [10, 25, 30, 45, 50];
let Count1 = 0;
for (let i = 0; i < numbers.length; i++) {
  //numbers.length used for easy accessing based on index value
  if (numbers[i] >= 30) {
    Count1++;
  }
}
console.log(Count1);

//Array + Loop

const fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Array + Loops + Condition
const numbers4 = [10, 5, 25, 8, 30, 15];
for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] > 10) {
    console.log(numbers4[i]);
  }
} // 25 8 30 15

//Find the Largest Number without Math.max()
const numbers5 = [10, 25, 7, 40, 15];
let largest = numbers5[0];
for (let i = 0; i < numbers5.length; i++) {
  if (numbers5[i] > largest) {
    largest = numbers5[i];
  }
}
console.log(largest); //40

// Find the Smallest Number without Math.min()
const numbers1 = [18, 5, 25, 2, 40, 10];
let smallest = numbers1[0];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] < smallest) {
    smallest = numbers1[i];
  }
}
console.log(smallest); //2

//Count Positive Numbers (++ counting used)
const numbers6 = [-5, 10, -2, 8, 0, 15, -7];
let Count2 = 0;
for (let i = 0; i < numbers6.length; i++) {
  if (numbers6[i] > 0) {
    Count2++;
  }
}
console.log(Count2); //3

//Sum of Positive Numbers (+= used)
const numbers2 = [-5, 10, -2, 8, 0, 15, -7];
let sum2 = 0;
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > 0) {
    sum2 += numbers2[i];
  }
}
console.log(sum2);

//Reverse an Array without using .reverse()
const numbers7 = [10, 20, 30, 40, 50];
for (let i = 4; i >= 0; i--) {
  console.log(numbers7[i]);
}

//Reverse a String (same backward-loop idea)
const word = "JavaScript";
for (let i = 9; i >= 0; i--) {
  console.log(word[i]);
} // more professional version (Instead of hardcoding 9, use .length:)

// const word = "JavaScript";
// for (let i = word.length - 1; i >= 0; i--) {
//     console.log(word[i]);
// }

//Build the Reverse String each character printed seperately
const word1 = "JavaScript";
let reversed = "";
for (let i = word1.length - 1; i >= 0; i--) {
  reversed += word1[i];
}
console.log(reversed);

//Count Vowels === ||
const word2 = "javascript";
let count = 0;
for (let i = 0; i<word2.length; i++) {
      if (
        word2[i] === "a" ||
        word2[i] === "e" ||
        word2[i] === "i" ||
        word2[i] === "o" ||
        word2[i] === "u") {
    count++;
  }
}
console.log(count); //3 


//Count Consonants !== && (consonants means any alphabetic characters that is not a vowels)
const word3 = "javascript";
let count3=0;
for(let i=0; i<word3.length; i++){
  if(
        word3[i] !== "a" &&
        word3[i] !== "e" &&
        word3[i] !== "i" &&
        word3[i] !== "o" &&
        word3[i] !== "u"){
    count3++;
  }
}
console.log(count3);


// Nested for Loops
//outer loop for rows and an inner loop for stars.
//*
// **
// ***
// ****
// *****

for(let i=1; i<=5; i++){  // outer loop
  let pattern="";
  for(let j=1; j<=i;j++){ // inner loop
    pattern+= "*";
  }
    console.log(pattern);
}

//Multiplication Table of 5
const number8=5;
for(let i=1; i<=10; i++){
  console.log(`${number8} x ${i} = ${number8 * i}`);
}

//! for in - Used to get indexes.
let fruits0 = ["Apple", "Banana", "Orange"]
for (let index in fruits0) {
    console.log(index)
}

//! for...of - Used to get array values.

let fruits9 = ["Apple", "Banana", "Orange"]
for (let fruit of fruits9) {
    console.log(fruit)
}

//! forEach() - Executes a function for every element.

let numbers9 = [1, 2, 3, 4, 5]
numbers9.forEach(function(value) {
    console.log(value)
})

//forEach() does not normally create a new array.



const fruits11=["Banana", "Apple", "Orange"];
for(const fruit of fruits11){
  console.log(fruit);
}

const human={
  name:"john",
  age: 20,
  city: "London"
};
for (const key in human){
  console.log(key, ":", human[key]);
}

const fruits12=["Banana", "Apple", "Orange"];
for(const index in fruits12){
  console.log(fruits12[index]);
}

const fruits13=["Banana", "Apple", "Orange"];
fruits13.forEach(function(fruit){
  console.log(fruits13);
});

