function arraySum(arr){
    let sum = 0;

    for(let i = 0; i< arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
let arr = [10, 20, 30, 40, 50];
console.log("Sum of all elements in",arr,":",arraySum(arr));