let str = "programming";// stores input string
let freq = {};//creates an empty object to store each character and its count

for(let i = 0; i< str.length; i++){
    let ch = str[i];
    if(freq[ch]){
        freq[ch] ++;
    }
    else{
        freq[ch] = 1;
    }
}
for(let key in freq){
    console.log(key +" : " + freq[key]);
}