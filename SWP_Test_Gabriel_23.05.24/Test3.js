// Zähle wie oft a oder e oder ö vorkommen 

// 4

const data3 = "Das Leben ist schön"; 
let arr = data3.split ("");
let result = 0
for (let i = 0; i < arr.length; i++) {

    if ((arr='ö')||(arr='a')||(arr='e')) {
        result++
    }
}
console.log(result);
