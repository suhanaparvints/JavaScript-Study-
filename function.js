// Function
// function without parameter
function greetUser() {
  console.log("Hello, Suhana!");
}
greetUser();

// Function with a parameter
function greetUser1(name) {
  console.log("Hello, " + name + "!");
}
greetUser1("Suhana Parvin");

// function with template literals
function greetUser2(name) {
  console.log(`Hello, ${name}!`);
}
greetUser2("Suhana Parvin T.S");

// Arrow Function
const greetUser3 = (name) => {
  console.log(`Hello, ${name}!`);
};

greetUser3("Suhana...");

//because there's only one statement:
// const greetUser = name => console.log(`Hello, ${name}!`);

// greetUser("Suhana");

// Function Expression
const greetUser4 = function (name) {
  console.log(`Hello, ${name}!`);
};

greetUser4("Suhana");

//! parameters and return values.
function addNumbers(p, q) {
  return p + q;
}
console.log(addNumbers(10, 20)); //30

// discount amount = price × discountPercentage / 100 (10% of 1000 = 100) price - discount amount(1000 - 100 = 900)
function calculateDiscount(price, discountPercentage) {
  return price - (price * discountPercentage) / 100;
}
console.log(calculateDiscount(1000, 10)); // 900

//Function + Condition
function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
console.log(checkAge(20));

//Function + Array + Loops
const numbers = [10, 20, 30, 40];
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumArray(numbers));

//Function + Find Largest
const numbers1 = [10, 25, 7, 40, 15];
function findLargest(numbers1) {
  let largest =numbers1[0];
  for (let i = 0; i < numbers1.length; i++) {
    if(numbers1[i]>largest){
        largest = numbers1[i];
  }
}
return largest;
}
console.log(findLargest(numbers1));