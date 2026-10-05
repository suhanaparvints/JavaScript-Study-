const numbers = [5, 10, 15, 20, 25, 30];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
for (const number of numbers) {
  console.log(number);
}
numbers.forEach((number) => {
  console.log(number);
});
//even
for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}
//large num
let largest = numbers[0];
for (const number of numbers) {
  if (number > largest) {
    largest = number;
  }
}
console.log(largest);

//search for value
let found = false;
for (const number of numbers) {
  if (number === 30) {
    found = true;
    break;
  }
}
console.log(found);

//count number greater than any value(25)
let count = 0;
for (const number of numbers) {
  if (number > 25) {
    count++;
  }
}
console.log(count);

//insertion
let insert = [10, 20, 30];
insert.push(40);
console.log(insert);
insert.splice(2, 0, 25);
console.log(insert);
insert.unshift(5);
console.log(insert);
insert.push(50);
console.log(insert);
insert.unshift(1, 2);
console.log(insert);
//level2
let level2 = [10, 20, 50];
level2.splice(2, 0, 30);
console.log(level2);
level2.splice(3, 0, 40);
console.log(level2);
level2.splice(0, 0, 5, 10);
console.log(level2);
level2.splice(2, 0, 25, 30, 25);
console.log(level2);

//deletion
const deletion = [11, 12, 13, 14, 15, 17, 18];
deletion.pop();
console.log(deletion);
deletion.shift();
console.log(deletion);
deletion.splice(1, 1);
console.log(deletion);
deletion.splice(1, 2);
console.log(deletion);
//store removed element in a variable
const storing = [50, 40, 30, 20, 10];
const store = storing.pop();
console.log(store);
const store1 = storing.splice(1, 1);
console.log(store1);
console.log(storing);
//without using pop() or shift() use splice()

//sort()
const manage = [500, 200, 100, 400, 300];
manage.sort();
console.log(manage);
//ascending
manage.sort((a, b) => a - b);
console.log(manage);
//descending
manage.sort((a, b) => b - a);
console.log(manage);

//reverse()
const rever = [10, 20, 30, 40, 50];
rever.reverse();
console.log(rever);
//fill(value,start,end)
const filling = [10, 20, 30, 40, 50];
filling.fill(1);
console.log(filling);
filling.fill(0, 3);
console.log(filling);
filling.fill(0, 3, 5);
console.log(filling);

//array combining

//concat()
const arr1 = [11, 12, 13, 14];
const arr2 = [15, 16, 17, 18];
const result = arr1.concat(arr2);
console.log(result);
//two or more array
const arr3 = [19, 20];
console.log(arr1.concat(arr2, arr3));
//with values
const nums = [10, 20];
const results = nums.concat(30, 40);
console.log(results);
//with arrays & values
const arrval = nums.concat([30, 40, 50], 60);
console.log(arrval);

//spread ...
const spreadop = [111, 112, 113, 114];
console.log(...spreadop);
//combines
const arr4 = [10, 12, 13];
const arr5 = [20, 40, 45];
const comb = [...arr4, ...arr5];
console.log(comb);
//add values while combines
const comval = [10, 20, 13];
const coms = [5, ...comval, 40];
console.log(coms);
//slice ...
const slicing = [10, 20, 30, 40, 50];
const res = slicing.slice(1);
const res1 = slicing.slice(1, 2);
console.log(res);
console.log(res1);
console.log(slicing.slice());

//transform
//map()
const numbers1 = [1, 2, 3, 4, 5];
const trans = numbers1.map((num) => {
  return num * 2;
});
console.log(trans);
//filter()
console.log(numbers1);
const trans1 = numbers1.filter((num) => {
  return num % 2 === 0;
});
console.log(trans1);
//reduce()
console.log(numbers1);
const trans2 = numbers1.reduce((total, num) => {
  return total + num;
});
console.log(trans2);

//2D Array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[2][1]);

//traverse a matrix
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
//find sum of elements
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}
console.log(sum);

//find largest element
let large = matrix[0][0];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] > large) {
      large = matrix[i][j];
    }
  }
}
console.log(large);

//print rows
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
}
//for ech element
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }

  console.log("-----");
}
//print columns
for (let j = 0; j < matrix[0].length; j++) {
  for (let i=0; i < matrix.length; i++) {
    console.log(matrix[i][j]);
  }
  console.log("-----");
}

//Diagonal Element
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
}