let num = 1022953;
let digit;
let count = 0;
let temp = num;
while(temp > 0){
    digit = temp%10;
    count ++;
    temp = Math.floor(temp/10);
}
console.log(`The number of digits in ${num} = ${count}`);