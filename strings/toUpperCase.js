let str = "Hello World";
let upper = "";

for(let i = 0; i< str.length; i++){
    let ch =str[i];
    let ascii = ch.charCodeAt(0);

    if(ascii >= 97 && ascii <= 122){
        upper = upper + String.fromCharCode(ascii - 32);
    }
    else{
        upper = upper + ch;
    }
}
console.log("original String:",str);
console.log("Uppercase String:",upper);