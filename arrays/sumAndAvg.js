let arr = [3, 46, 67, 91, 21];
let sum = 0;

// for(let i = 0; i< arr.length; i++){
//     sum += arr[i];
// }

for(let el of arr){
    sum = sum + el;
}

let avg = sum/(arr.length);
console.log("Sum of the elements:",sum);
console.log("Average of elements:",avg);