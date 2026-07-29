let word = "Supercalifragilisticexpilalidocious";
let vowels = 0;
for(let val of word){
    if(val == "a"||val == "e"|| val == "i"||val == "o"|| val == "u"||val == "A"||val == "E"|| val == "I"||val == "O"|| val == "U"){
        vowels ++;
    }
}
console.log(`The number of vowels in ${word} = ${vowels}`);