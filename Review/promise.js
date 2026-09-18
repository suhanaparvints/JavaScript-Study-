//resolve and then
const promise=new Promise((resolve,reject)=>{
    resolve("success");
})
promise.then((result)=>{
    console.log(result);
});
//reject and catch
console.log(promise);
const promise0=new Promise((resolve, reject) => {
    reject(new Error("error"))
})
promise0.catch((error)=>{
console.log(error.message);
});
//finally
const promise1= new Promise((resolve,reject)=>{
    resolve("win")
})
promise1.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error.message)
})
.finally(() => {
    console.log("hello")
});
//combined
const promise2= new Promise((resolve, reject) => {
    const success=true;
    if(success){
        resolve("Data loaded successfully")
    }else{
        reject(new Error("failed load"));
    }
});
promise2.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error.message);
})
.finally(()=>{
    console.log("finished");
})
//practice question
const promise3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("hello")
    },2000)
});
promise3.then((result)=>{
    console.log(result);
})


//full 
const promise4=new Promise((resolve,reject)=>{
    resolve(10)
})
promise4.then((value)=>{
    console.log("first",value);
    return value+10;
})
.then((value)=>{
    console.log("second",value);
    return promise.resolve(value+20);
})
.then((value)=>{
    console.log("Third",value);
    if(value>25){
        throw new Error("value is too large");
    }
    return value;
})
.catch((error)=>{
    console.log(error.message);
    return 0;
})
.finally(()=>{
    console.log("finished");
})