//callback
function user(){
    return "suhana"
}
function ftncall(callback){
    console.log(callback());
}
ftncall(user);

// using arrow
const call = (name) => console.log("Hello " + name);
const call2 = (callback) => {
  callback("Suhana");
};
call2(call);   
// const anony=(callback)=>callback("suhana");
// const anony2=(name)=>console.log("hello" + name);
// anony(anony2);


//with anonymous
const callanony=function(callback){
    callback();
}
callanony(function(){
    console.log("hello anonymous");
});

//callback with arrow
const arrow=()=>console.log("hello suhana parvin arrow");
const arrowcall=(callback)=>callback();
arrow(arrowcall);

//forEach() callback
//callback parameters- value, index, array
const array=["hii","hello", "sugham ano"];
array.forEach(function(arrays){
    console.log(arrays);
});
//forEach() callback with arrow
const fruit=["apple", "orange","banana"];
fruit.forEach(fruits=>console.log(fruits));

//callback with map()
const numbers11 = [1, 2, 3, 4];
const doubled = numbers11.map(function(number) {
    return number * 2;
});
console.log(doubled);

//