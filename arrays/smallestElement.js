let arr = [6, 23, 45, 67, 89, 101, 12];
let smallestEl = arr[0];

// for(let i = 0; i< arr.length; i++){
//     if(arr[i] < smallestEl){
//         smallestEl = arr[i];
//     }
// }

for(let el of arr){
    if(el < smallestEl){
        smallestEl = el;
    }
}
console.log("Smallest element : ",smallestEl);