let num = 10201;
let digit;
let reversed = 0;
let i = num;
while(i != 0){
    digit = i%10;
    reversed = (reversed*10) + digit;
    i = Math.floor(i/10);
}

if(reversed == num){
    console.log(`${num} is PALINDROME`);
}
else{
    console.log(`${num} is NOT palindrome`);
}