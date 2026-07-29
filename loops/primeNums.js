let num = 100;
let isPrime = 0;
console.log(`The prime numbers (1-100): `);
for(let i=2; i<=100; i++){
    if(i<= 1){
        continue;
    }
isPrime = 1;
    for(let j=2; j<=i/2; j++){
        if(i%j == 0){
            isPrime = 0;
            break;
        }
    }
    if(isPrime == 1){
        console.log(i);
    }
}
