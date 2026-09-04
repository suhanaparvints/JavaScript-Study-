const button = document.querySelector("button");

button.onclick = function () {
    console.log("Hello!");
};
//or
button.onclick = sayHello;

function sayHello() {
    console.log("Hello!");
}
//Important limitation
// You can only assign one function to an onclick property at a time.
button.onclick = function () {
    console.log("First");
};

button.onclick = function () {
    console.log("Second");
};