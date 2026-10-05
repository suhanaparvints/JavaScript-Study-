//Print all elements
const array=[10,20,30,40,50];
for(let i=0; i<array.length;i++){
    console.log(array[i]);
}
//Find the sum of all elements
const array1=[10,20,30,40];
let sum=0;
for(let i=0;i<array1.length;i++){
    sum+=array[i]
}
console.log(sum);
//Find the largest element
const array2=[10, 50, 20, 80, 30];
let largest=array2[0];
for(const num of array2){
if(num>largest){
  largest=num;
}
}
  console.log(largest);
//Find the smallest element
const array3=[10, 50, 20, 80, 30];
let smallest=array3[0];
for(const num of array3){
if(num<smallest){
  smallest=num;
}
}
console.log(smallest);
//Count the number of elements
const numbers=[5,10,15,20];
let count=0;
for(let i=0;i<numbers.length;i++){
    count++;
}
console.log(count);
//Search for an element
const arr=[10, 20, 30, 40];
let found=false;
for(const num of arr){
if(num===30){
    found=true;
    break;
}
}
console.log(found);
//Count even numbers
const evens=[10,15,20,25,30];
let counts=0;
for(const num  of evens){
if(num%2===0){
counts++;
}
}
console.log(counts);
//Reverse an array
const rev= [10, 20, 30, 40, 50];
let reverse=[];
for(let i=rev.length-1;i>=0;i--){
    reverse[reverse.length]=rev[i]
}
console.log(reverse);
//Copy one array into another
let arr1=[10,20,30];
let arr2=[];
for(let i=0;i<arr1.length;i++){
    arr2[i]=arr1[i];
}
console.log(arr2);