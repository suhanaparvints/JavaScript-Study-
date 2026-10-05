//bubble sort
//insertion sort

//print elements
//reverse
//count elements
//palindrome

//bubble sort
const arr = [5, 3, 2, 8, 1];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

//insertion
const arr1 = [5, 3, 8, 1, 2];
for (let i = 1; i < arr1.length; i++) {
  let key = arr1[i];
  let j = i - 1;
  while (j >= 0 && arr1[j] > key) {
    arr1[j + 1] = arr1[j];
    j--;
  }
  arr1[j + 1] = key;
}
console.log(arr1);

//print elements
const arr2 = [10, 20, 30, 40, 50];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
//reverse
const arr3=[10,20,30];
let reverse=[];
for(let i=arr3.length-1;i>=0;i--){
    reverse[reverse.length]=arr3[i]
}
console.log(reverse);

//count elements
const arr4 = [2, 3, 4, 6];
let count = 0;
for (let i = 0; i < arr4.length; i++) {
  count++;
}
console.log(count);

//palindrome
let arr5 = [1, 2, 3, 2, 1];
let isPalindrome = true;
for (let i = 0; i < arr5.length / 2; i++) {
  if (arr5[i] !== arr5[arr5.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
if(isPalindrome){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}