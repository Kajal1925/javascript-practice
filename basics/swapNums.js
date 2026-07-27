let num1 = 10;
let num2 = 20;

console.log("Before Swapping:");
console.log("A = ",num1);
console.log("B = ",num2);
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("After Swapping:");
console.log("A = ",num1);
console.log("B = ",num2);

// MODERN JAVASCRIPT
let a = 100;
let b = 200;
console.log("Before Swapping");
console.log("a = ",a);
console.log("b = ",b);
[a, b] = [b, a];
console.log("After Swapping");
console.log("a = ",a);
console.log("b = ",b);
