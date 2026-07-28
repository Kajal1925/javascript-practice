let num = 371;
let digit;
let count = 0;
let sum = 0;
let i = num;
let temp = Math.floor(num); // removes the sign;
while( temp > 0){
    temp = Math.floor(temp/10);
    count++;
}
while(i != 0){
    digit = i%10;
    sum = sum + (digit**count);
    i = Math.floor(i/10);
}
if(sum === num){
    console.log(`${num} is an Armstrong number`);
}
else{
    console.log(`${num} is not an armstrong number`);
}