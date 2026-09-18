async function name() {
    return "suhana"
}
console.log(name());

// asyn+ await
function data(){
    return Promise.resolve("data await")
}
async function greet(){
    const awaits= await data();
    console.log(awaits);
}
greet();
//async wth try catch finally
async function good(){
try{
    const promise=new Promise((resolve,reject)=>{
        reject(new Error("failed"))
    });
    const result=await promise;
    console.log(result);
}
catch(error){
    console.log(error.message);
}
finally{
console.log("finishes");
}
}
good();


//fetch
const getitem=async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data =await response.json();
    console.log(data);
}
getitem();

//
const getPost = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        console.log(data.title);
    } catch (error) {
        console.log("Error:", error.message);
    }
};

getPost();