//function callback
function greet(name){
    console.log("hello "+name);
}
function call(callback){
    callback("suhana")
}
call(greet)
//anonymous callback
function anon(callback) {
    callback("Suhana Parvin");
}
anon(function(name) {
    console.log("Hello " + name);
});
//arrow function callback
const arrcall=(callback)=>callback("suhana ts");
arrcall((name)=>console.log("hello "+ name));

//calculation callback
function add(a,b, callback){
    return callback(a,b);
}
function num(a,b){
return a+b;
}
console.log(add(1,2,num));
//
function adds(a,b,callback){
    return callback(a,b);
}
const result = adds(5, 2, (a, b) => {
    return a + b;
});
console.log(result);