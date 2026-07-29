let firstTerm = 0;
let secondTerm = 1;
let num = 5;
console.log("Fibonacci Series: ");
for(let i=0; i<num; i++){
      console.log(firstTerm);
    sum = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = sum;  
}
