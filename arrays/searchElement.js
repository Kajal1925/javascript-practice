let arr = [10, 20, 111, 30, 40, 50, 111];
let target = 111;
let found = 0;

for(let i= 0; i<arr.length; i++){
    if(arr[i] == target){
        found = 1;
        console.log('Target found at position',i+1);
    }   
}

if(found == 0){
    console.log('Target not found');
}