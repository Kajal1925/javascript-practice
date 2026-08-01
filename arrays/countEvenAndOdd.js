let arr = [23, 12, 76, 91, 45, 10, 100, 42, 66, 80];
let even = 0;
let odd = 0;

for(let el of arr){
    if(el%2 == 0){
        even ++;
    }
    else{
        odd ++;
    }
}
console.log("Even numbers:",even);
console.log("Odd numbers:",odd);