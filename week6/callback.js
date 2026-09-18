//greet user
function greet(name,callback){
    callback(name)
}
greet("suhana", function(name){
    console.log("Hello "+name);
})
//adding 2 nums
function add(a,b,callback){
    callback(a,b)
}
add(10,11, function(a,b){
    console.log(a+b);
})
//multi
function multi(c,d,callback){
    callback(c,d)
}
multi(12,13,function(c,d){
    console.log(c*d);
})
//check odd /even
function oddeven(num,callback){
    callback(num)
}
oddeven(12,(num)=>{
   if(num%2===0){
    console.log("even");
   }else{
    console.log("odd");
   }
})
//Convert String to Uppercase
function string(str,callback){
    callback(str)
}
string("hello suhana",(str)=>{
    console.log(str.toUpperCase());
})


//set interval
// const promi= new Promise((resolve,reject)=>{
//     setInterval(()=>{
//          console.log("hi")
//     },1000)
// })
// promi.then((result)=>{
// console.log(result);
// })

// setInterval(() => {
//     console.log("Hello");
// }, 1000);

let count = 1;
let timer = setInterval(() => {
    console.log(count);
    count++;
    
    if (count > 5) {
        clearInterval(timer);
    }
}, 1000);