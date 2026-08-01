let arr = [3, 45, 32, 78, 95];
let largestEl = arr[0];
let secondEl = arr[0];

for(let i = 0; i< (arr.length); i++){
    if(arr[i]>largestEl){
        secondEl = largestEl;
        largestEl = arr[i];
    }
    else if((arr[i] > secondEl) && (arr[i] < largestEl)){
        secondEl = arr[i];
    }
}
console.log("Largest element:",largestEl);
console.log("Second Largest element:",secondEl);