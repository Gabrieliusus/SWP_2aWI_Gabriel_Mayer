// gib nur die Wörter aus, die ein e aber kein l enthalten 
// ein, netter 
const data3 = "Hans ist ein netter Kerl!";
let arr = data3.split(" ")
let e = ""
for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    if (word.includes("e") && !word.includes("l")) {
        e+=word+" "
    }
    }
    console.log(e);