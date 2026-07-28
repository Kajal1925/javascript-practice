let num = 102;
let reverseNum = 0;
let digit;
console.log("Before reverse : ",num);

while(num > 0){
    digit = num%10;
    reverseNum = (reverseNum*10) + digit;
    num = Math.floor(num/10); // snice js does not have integer division like c++... math.floor removes the decimal part and returns the largest whole number less than or equal to the value 
}
console.log("After reverse : ",reverseNum);