//if...else statement
const isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcom back!");
} else {
  console.log("Please log in");
}

//condition with a comparison operator
const price = 1500;
if (price >= 1000) {
  console.log("Discount Available");
} else {
  console.log("No discount");
}

//Multiple Conditions with Logical opertor
const price1 = 2500;
const isMember = true;
if (price1 >= 1000 && isMember) {
  console.log("20% discount");
} else {
  console.log("No discount");
}

// if False, Multiple Conditions, comparison operator >=, && Logical opertor
const age = 22;
const hasLicense = false;
if (age >= 18 && hasLicense) {
  console.log("You can rent the car");
} else {
  console.log("You cannot rent the car");
}

//Multiple Conditions and >= , ||
const isAdmin = false;
const isModerator = true;
if (isAdmin || isModerator) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Multiple Conditions and >= combining ||
const isAdmin1 = false;
const isUser = true;
const isVerified = true;
if (isAdmin1 || (isUser && isVerified)) {
  console.log("Feature access granted");
} else {
  console.log("Feature access denied");
}

// using == vs ===
const userAge = "18";
console.log(userAge == 18); //true Loose Operator
console.log(userAge === 18); //false Strict Operator because "18" is string

//The types are different (number vs string)
console.log(10 == "10"); //true ==   → loose equality
console.log(10 === "10"); //false ===  → strict equality
console.log(10 != "10"); //false !=   → loose inequality
console.log(10 !== "10"); //true !==  → strict inequality

// if / else if / else
const mark = 75;
if (mark >= 90) {
  console.log("Grade A");
} else if (mark >= 75) {
  console.log("Grade B");
} else if (mark >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//Debugging
const age1 = 18;
if (age1 >= 18) {
  console.log("Adult");
} else if (age1 >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}

// && compare the actual values:
const username = "admin"; //if only true
const password = "1234"; //if only true
if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}

//only if all three conditions are true:

const username1 = "admin";
const password1 = "1234";
const isAccountActive = true;
if (username === "admin" && password === "1234" && isAccountActive) {
  console.log("Login successful");
} else {
  console.log("Login Failed");
}

//Nested Conditions
const isLoggedIn1 = true;
const hasPaid = true;
const mark1 = 65;
if (isLoggedIn1 && hasPaid) {
  if (mark1 >= 50) {
    console.log("You Passed");
  } else {
    console.log("You Failed");
  }
} else{
  console.log("Access denied");
}

// Debugging + Nested Conditions
const isLoggedIn2 = true;
const hasPaid2 = false;
const mark2 = 80;

if (isLoggedIn2 && hasPaid2) {
    if (mark2 >= 50) {
        console.log("You Passed");
    }
} else {
    console.log("Access denied");
}

// ! NOT operator
const isLoggedIn3 = false;
if(!isLoggedIn3){
    console.log("please login");
}
else{
    console.log("Welcome back")
}

// !, &&, if, else if, else . Real-world Authentication

const isLoggedIn4 = true;
const isAdmin4 = false;
if(!isLoggedIn4){
    console.log("please Login");
}
else if(isLoggedIn4 && isAdmin4){
    console.log("Welcome Back")
}
else{
    console.log("Welcome User")
}

//Ternary Operator ? true : false

let age2 = 20;
console.log(age2>=18)?"Adult":"Minor";

//Ternary + Multiple Conditions

const price2 = 1200;
const isMember2 = true;
console.log((price2>=1000 && isMember2)?"Discount":"No Discount");