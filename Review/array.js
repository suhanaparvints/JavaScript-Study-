const fruit=["apple","orange","grapes"]
console.log(fruit);
//change
fruit[0]="Apple";
console.log(fruit);
//add
fruit[3]="dates"
console.log(fruit);
//remove
delete fruit[1];
console.log(fruit);
//new keyword array
const keyword = new Array("suhana","parvin","good morning");
console.log(keyword);
//toString()
console.log(keyword.toString());
//to JSON.stringify()
console.log(JSON.stringify(keyword));

//object inside array
const student=[{
    name:"suhana",
    age:20
},
{
    name:"parvin",
age:20.5
}];
console.log(student);
console.log(student[0]);
console.log(student[1].age);

//array.length
const array=[1,2,3,5,6,7,8,9,10];
console.log(array.length);
//length increase
array.length=11;
console.log(array);
//reduce length
array.length=5;
console.log(array);

//Array Methods
const cars=["RR","BMW","GTR","BenZ"];
cars.push("Oddi");
console.log(cars);
cars.pop();
console.log(cars);
cars.shift()
console.log(cars);
cars.unshift("Oddi");
console.log(cars);
//searching
const fruits=[10,40,20,30,40,50,50,60,50,10,30];
console.log(fruits.includes(40));
console.log(fruits.indexOf(40));
console.log(fruits.lastIndexOf(50));
console.log(fruits.find(num=>num>25));
console.log(fruits.findIndex(num=>num>45));
console.log(fruits.findLast(num=>num>45));
console.log(fruits.findLastIndex(num=>num>35));

//slice
const nums=[1,2,3,4,5,6,7,8,9,10];
console.log(nums.slice(2,4));
//splice
nums.splice(1,3,7,11,12,13);
console.log(nums);
//toSpliced()
nums.splice(0,1,15);
console.log(nums);
//concat
const arr1=[1,2,3,4];
const arr2=[5,6,7,8];
console.log(arr1.concat (arr2));
//join() covert array to string
const arr3=["apple","banana"]
console.log(arr3.join(","));
//fill()
nums.fill(0,1,5);
console.log(nums);
//valueof()
const num=new Number(10);
console.log(num.valueOf());
//with string
const text1 = new String("Hello");
console.log(text1.valueOf());
//valueOf() for an array 
const fruits3 = ["Apple", "Banana", "Mango"];
console.log(fruits3.valueOf());
console.log(fruits3.valueOf() === fruits3);  //true
//automatic use
const newnum=new Number(10);
console.log(newnum+10);

//Array.isArray()
console.log(Array.isArray(nums));
//copyWithin()
const no=[1,2,3,4,5,6,7,8,9,10];
no.copyWithin(1,4,8);
console.log(no);

//sort
const sort= ["hello", "bye", "am"]
sort.sort();
console.log(sort);
//with numbers
const nums1=[100,10,30,60,900];
nums1.sort((a,b)=> a-b);
console.log(nums1);
nums1.sort((a,b)=>b-a);
console.log(nums1);
//without changing org
const spre=[...nums1].sort((a,b)=>a-b);
console.log(spre);

const arrobj = [
    { name: "John", age: 25 },
    { name: "Alex", age: 20 },
    { name: "Sam", age: 23 }
];
// arrobj.sort();
// console.log(arrobj);
//
arrobj.sort((a, b) => a.name.localeCompare(b.name));  // This sorts names alphabetically.
console.log(arrobj);

arrobj.sort((a,b)=>a.age-b.age);
console.log(arrobj);