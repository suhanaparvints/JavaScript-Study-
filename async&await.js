//!async/await

//async
async function greet(){
    return "Hello"
}
console.log(greet());

//without promise
function greet1(){
return promise.resolve("hello")
}
greet()
    .then((message)=> console.log(message));

//async and await
function data(){
    return Promise.resolve("Data await");
}
async function greet2(){
    const wish= await data();
    console.log(wish);
}
greet2();

//async with arrow
const test=async()=> {
    console.log("hello arrow");
}
test();
//arrow with .then()
const say=()=> new Promise(resolve=>{
    resolve("hello data received");
});
say().then((result)=>console.log(result));
//async with methods
const user={
async getUser(){
    return "suhana"
}
}
user.getUser().then(name => console.log(name));
// another async with methods
const method = {
  sayed: async () => { console.log("hello method"); }
};

method.sayed(); // "hello method"


//async with promise reject try, catch, finally
async function handleReject(){
    try{
const promise=new Promise((resolve,reject)=>{
reject (new Error("failed"));
});
const result1= await promise;
console.log(result1);
    }
catch(error){
    console.log(error.message);
}
finally{
    console.log("finishes");
}
}
handleReject();

//async with promise resolve try, catch, finally
async function handleResolve(){
    try{
const promise1=new Promise((resolve,reject)=>{
resolve ("success");
});
const result2= await promise1;
console.log(result2);
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("finishes");
}
}
handleResolve();


//multiple await
async function getDatas(){
const p1=await getp1();
const p2=await getp2();
const p3=await getp3();
console.log(p1);
console.log(p2);
console.log(p3);
}

//sequential execution
function task1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("task1");
            resolve();
        },2000);
    })
}
function task2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("task2");
            resolve();
        },2000);
    })
}
function task3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("task3");
            resolve();
        },2000);
    })
}
async function runTask(){
await task1();
await task2();
await task3();
}
runTask();


//parallel execution with promise.all()

// const user1=await getuser();
// const order1=await getorder1();
// const payment= await getpayment();
//instead of 
function getUser0() {
  return new Promise(resolve => {
    setTimeout(() => resolve("user0 data"), 1000);
  });
}
function getOrder0() {
  return new Promise(resolve => {
    setTimeout(() => resolve("order0 data"), 2000);
  });
}
function getPayment0() {
  return new Promise(resolve => {
    setTimeout(() => resolve("payment0 data"), 1500);
  });
}
async function operation() {
  const [user0, order0, payment0] = await Promise.all([
    getUser0(),
    getOrder0(),
    getPayment0()
  ]);
  console.log(user0);
  console.log(order0);
  console.log(payment0);
}
operation();





  //async/await combined all
    function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Suhana" });
        }, 2000);
    });
}
function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Laptop", "Phone"]);
        }, 3000);
    });
}
async function loadData() {
    try {
        const [user, products] = await Promise.all([
            getUser(),
            getProducts()
        ]);

        console.log(user);
        console.log(products);

    } catch (error) {
        console.log(error.message);

    } finally {
        console.log("Finished");
    }
}
loadData();
