//bubble sort
const arr = [5, 2, 8, 1, 3];
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
//
const array = [10, 8, 4, 2, 6];
for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
console.log(array);

//selection sort
const arr1 = [9, 7, 1, 3, 5];
for (let i = 0; i < arr1.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[j] < arr1[minIndex]) {
      minIndex = j;
    }
  }
  let temp = arr1[i];
  arr1[i] = arr1[minIndex];
  arr1[minIndex] = temp;
}
console.log(arr1);

//
const arr2 = [10, 8, 9, 6, 7];
for (let i = 0; i < arr2.length - 1; i++) {
  let minIndexs = i;
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[j] < arr2[minIndexs]) {
      minIndexs = j;
    }
  }
  let temp = arr2[i];
  arr2[i] = arr2[minIndexs];
  arr2[minIndexs] = temp;
}
console.log(arr2);

//insertion sort
