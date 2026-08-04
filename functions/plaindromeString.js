function palindrome(str){
    let reverse = "";

    for(let i = str.length-1; i>=0; i--){
        reverse = reverse + str[i];
    }
    if(reverse === str){
       return true;
    }
    else{
        return false;
    }
}
let str = "madam";
if(palindrome(str)){
    console.log(str,"is palindrome");
}
else{
    console.log(str,"is not palindrome");
}