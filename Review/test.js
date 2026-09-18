// create a object inside a object replace the value
//for each for in
//array values using while loop
//create an arrow and normal function

const person={
    name:"suhana",
    age:20,
    country:{
        state:"kerala"
    }
}
person.country.state="Delhi";
console.log(person);

//for each()
const students=[
    {name:"suhana", age:20},
    {name:"Parvin", age:21}
];
students.forEach(function(student){
    console.log(student.name);
});

//for in
const students1= {
    name:"suhana",
     age:20,
     address:{
        place:"Ijk",
        district:"Thrissur"
     }
};
for(let key in students1){
    console.log(key);
}

//array values using while loop
const numbers=[10,20,30,40,50];
let i=0;
while (i<numbers.length){
    console.log(numbers[i]);
    i++;
}

//function
function greet(){
    console.log("Hello Suhana");
}
greet();

//arrow funtion
const add=(a,b)=> a+b;
console.log(add(10,20));