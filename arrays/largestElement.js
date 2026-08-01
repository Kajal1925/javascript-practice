let nums = [96, 87, 56, 6, 43, 22, 102];

let largestEl = nums[0];
// for(let i = 0; i< nums.length; i++){
//     if(nums[i] > largestEl){
//         largestEl = nums[i];
//     }
// }

for(let num of nums){
    if(num > largestEl){
        largestEl = num;
    }
}
console.log("Largest element :",largestEl);