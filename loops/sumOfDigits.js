let num = 1022592;
let digit;
let sum = 0;
let temp = num;
while(temp >0){
    digit = temp%10;
    sum += digit;
    temp = Math.floor(temp/10);
}
console.log(`The sum of digits in ${num} = ${sum}`);