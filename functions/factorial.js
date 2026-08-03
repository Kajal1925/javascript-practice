function factorial(num){
    if(num <= 1){
        return 1;
    }
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact = fact*i;
    }
    return fact;
}
let number = 6;
console.log("Factorial of",number,"=",factorial(number));