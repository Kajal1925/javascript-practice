let str = "madam";
let reversed = "";
for(let i= str.length-1; i>=0; i--){
    reversed = reversed + str[i];
}
console.log(str);
console.log(reversed);
if(reversed === str){
    console.log(`The string ${str} is palindrome`);
}
else{
    console.log(`The string ${str} is not palindrome`);
}