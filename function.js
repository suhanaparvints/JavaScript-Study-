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

// function withtemplate literals
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
function addNumbers(p,q) {
  return p + q;
}
console.log(addNumbers(10, 20));
