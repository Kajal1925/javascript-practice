function largestNum(num1, num2 ,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
let num1 = 34;
let num2 = 124;
let num3 = 201;
console.log("Largest nummber =",largestNum(num1, num2, num3));