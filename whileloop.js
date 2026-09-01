//while Loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//infinite loop let i = 1;
// let a=1;
// while (a <= 5) {
//     console.log(a);
// }

//while + Condition odd numbers from 1 to 10.

let a = 1;
while (a <= 10) {
  if (a % 2 === 0) {
    console.log(a);
  }
  a++; //while loop, make sure the counter update happens every iteration: Otherwise, you can accidentally create an infinite loop.
}

//break - Completely stops the loop
let c = 1;
while (c <= 10) {
  if (c === 6) {
    break;
  }
  console.log(c);
  c++;
}

//continue - Skips the current iteration
for(let d = 1; d <= 10; d++) { 
  if (d === 5) {
    continue;
  }
  console.log(d);
}

