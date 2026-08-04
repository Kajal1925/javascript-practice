function reverse(str){
    let rev = "";

    for(let i = str.length-1; i>=0; i--){
        rev = rev + str[i];
    }
    return rev;
}
let str = "hello";
console.log("Original string: ",str);
console.log("Reverse string: ",reverse(str));