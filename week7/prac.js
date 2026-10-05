const remove = (arr) => {
  return [...new Set(arr)];
};
console.log(remove([1, 2, 3, 4, 4, 5]));
let arr = [1, 2, 3, 2, 1];

let isPalindrome = true;

for (let i = 0; i < arr.length / 2; i++) {
  if (arr[i] !== arr[arr.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

const arr1 = [10, 20, 30, 40, 50];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

const arr2 = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
  sum += arr2[i];
}
console.log(sum);

const arr3 = [10, 50, 20, 80, 30];
let largest = arr3[0];
for (let i = 0; i < arr3.length; i++) {
  if (largest < arr3[i]) {
    largest = arr3[i];
  }
}
console.log(largest);


const arr4 = [10, 50, 20, 80, 30];
let largest4 = arr3[0];
for (let i = 0; i < arr4.length; i++) {
  if (largest4 > arr3[i]) {
    largest4 = arr4[i];
  }
}
console.log(largest4);

const count=[5,29,30,39];
let counts=0;
for(let i=0;i<count.length;i++){
    counts++;

}
    console.log(counts);

    const searches=[10,40,50,30];
    let found=false;
    for(let i=0;i<searches.length;i++){
        if(searches[i]===30){
            found=true;
            break;
        
        }
    }
        if(found){
            console.log("found");
        }
        else{
            console.log("not found");
        }


    const even=[20,4,3,1];
    let coun=0;
    for(let i=0;i<even.length;i++){
        if(even[i]%2!==0){
        coun++;
        }
    }
    console.log(coun);

const rev=[10,20,30];
let arrs=[]
for(let i=rev.length-1;i>=0;i--){
arrs[arrs.length]=rev[i]
}
console.log(arrs);

const arr6=[10,20,30];
let arr7=[];
for(let i=0;i<arr6.length;i++){
    arr7[i]=arr6[i]
}
console.log(arr7);