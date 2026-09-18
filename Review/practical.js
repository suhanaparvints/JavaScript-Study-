const a={name:"sara"};
const b={age:20};
console.log(Object.assign(a,b));

const user={name:"suhana", age:20}
delete user.age;
console.log(user);

const ab={a:1,b:2};
console.log(Object.hasOwn(ab,"c"));
console.log(Object.entries(ab));
console.log(Object.keys(ab));
console.log(Object.values(ab));

const student={
    name:"ali",
    details:{grade:"B",city:"Delhi"}
};
student.details.grade="A+";
console.log(student);


const printname=(name,callback)=>{
    callback(name);
}
const showName=(name)=>{
    console.log(name);
}
printname("suhana",showName)

//add 2 no.s
const addNumbers = (a, b, callback) => {
    const result = a + b;
    callback(result);
};
const displayResult = (result) => {
    console.log(result);
};
addNumbers(10, 20, displayResult);

//3 times
const runTask=(task,callback)=>{
    for(let i=1;i<=3;i++){
        task(i)
    }
    callback();
}
const task=(number)=>{
    console.log(`task is ${number}running`);
}
const completed = () => {
    console.log("All tasks completed");
};
runTask(task,completed);

//set
const arr=[1,2,2,3,4,5,4];
const newarr=[...new Set(arr)];
console.log(newarr);
//map
const fruits = ["apple", "banana", "apple", "orange"];
const count = new Map();
fruits.forEach((fruit) => {
    count.set(fruit, (count.get(fruit) || 0) + 1);
});
console.log(count);
