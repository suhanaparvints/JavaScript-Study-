//1
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    continue;
  }
  console.log(i);
}
//2
const user = { name: "Ali", age: 25, country: "India" };
for (const key in user) {
  console.log(key, ":", user[key]);
}
//3
const arr = ["apple", "banana", "mango"];
for (const users of arr) {
  console.log(users.toUpperCase());
}
//4
const sum = [5, 10, 15, 20];
let result = 0;
sum.forEach((value) => (result += value));
console.log(result);
//5
const str = "hello";
let reverse = "";
let i = str.length - 1;
while (i >= 0) {
  reverse += str[i];
  i--;
}
console.log(reverse);

//6
const num = 6;
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}
//7
const score = 60;
if (score >= 100) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else {
  console.log("Fail");
}

//8
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    "Looking day";
}
console.log(day);

//9
function greet(name) {
  return "Hello" + name;
}
console.log(greet("suhana"));

//10
const square = (nums) => nums ** 2;
console.log(square(5));
//11
const isPositive = function (num1) {
  return num1 >= 0;
};
console.log(isPositive(4));
//12
function welcome(name = "Guest") {
  console.log(`welcome ${name}`);
}
welcome();
welcome("alice");

//13 rest
function sumAll(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
console.log(sumAll(10, 20, 30));
//function sumAll(...numss) {
//   return numss.reduce((total, numss) => (total += numss));
// }
// console.log(sumAll(2, 4, 6, 8));

//14 spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
//15 iife
(() => console.log("Script started"))();
//16
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
console.log(multiply(3)(4));
//17
function adding(d) {
  return function (e) {
    return function (f) {
      return d + e + f;
    };
  };
}
console.log(adding(5)(5)(10));

//18
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("data loaded");
  }, 2000);
});
promise.then((result) => {
  console.log(result);
});

//19
const fet = async () => {
  try {
    const aw = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const dat = await aw.json();
    console.log(dat.title);
  } catch (error) {
    console.log(error.message);
  }
};
fet();
