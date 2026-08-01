let arr = [3, 45, 87, 65, 12];

for(let i = 0; i< (arr.length)/2; i++){
   temp = arr[(arr.length)-i-1];
   arr[(arr.length)-i-1] = arr[i];
   arr[i] = temp;
}
console.log("Reversed Array:",arr);