let arr = [34, 12, 65, 34, 5, 12];

for(let i = 0; i< arr.length; i++){
    for(let j = i+1; j< arr.length; j++){
        if(arr[i] == arr[j]){
            for(let k = j; k < arr.length;k++){
                arr[k] = arr[k+1];
            }
            arr.length --;
            j--;
        }
    }
}
console.log("New array:",arr);
