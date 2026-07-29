let word = "Graduation";
let reversed = "";
for(let i = word.length-1; i>=0; i--){
    reversed = reversed + word[i];
}
console.log("Original String: ",word);
console.log("Reversed String: ",reversed);