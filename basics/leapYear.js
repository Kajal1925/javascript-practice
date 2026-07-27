let year = 2026;
if((year%400 === 0)||(year%4 === 0 && year%100 != 0)){
    console.log("Year",year,"is a Leap Year");
}
else{
    console.log("Year",year,"is not a Leap Year");
}