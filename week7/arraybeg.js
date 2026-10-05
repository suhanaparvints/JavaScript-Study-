//Traversal - for, for...of, forEach(), for...in 
//calculate sum
//using for
const num=[10,20,30,40];
let sum=0;
for(let i=0;i<num.length;i++){
    sum+=num[i]
}
console.log(sum);
//using for...of
let sums=0;
for(const number of num){
    sums+=number;
}
console.log(sums);
//for can break to stop early
for(let i=0;i<num.length;i++){
 if(num[i]===30){
    break;
 }
 console.log(num[i]);
}
//for...of can also stop
for(const number of num){
    if(number===30){
        break;
    }
    console.log(number);
}