function checkPrime (num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i< num; i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}
let number = 11;

if(checkPrime(number)){
    console.log(number," is Prime Number");
}
else{
    console.log(number," is Not a Prime Number");
}