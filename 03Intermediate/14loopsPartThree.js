const names = ["Youtube", "Facebook", "Instagram", "Amazon", "Netflix"];

// "for of" loop is majorly used for array
// for(const i of names){
//     console.log(i);
// }

// "for in" loop is majorly used for objects
const symbols = {
    // key value pair
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    pm: "ProgrammersMode",
}

for(const i in symbols){
    // console.log(i); // keys
    // console.log(symbols[i]); // values
    console.log(`Key: ${i} & Value: ${symbols[i]}`);
}