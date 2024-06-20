// Zähle die negativnen Zahlen, die positiven Zahlen und die Anzahl von 0 
// Gib die prozentuelle Verteilung an 
const data2 = "1,2,3,4,0,-2,0,-1,5,6,7,8,9,10,11,12";
let arr = data2.split(",")
let negativ = 0

for (let i = 0; i < arr.length; i++) {
    let nummer = parseInt(arr[i])
    if (nummer < 0){
        negativ++
    }
}

let positiv = 0
for (let i = 0; i < arr.length; i++) {
    let nummer2 = parseInt(arr[i])
    if (nummer2 > 0){
        positiv++
    }
}

let nulll = 0
for (let i = 0; i < arr.length; i++) {
    let nummer3 = parseInt(arr[i])
    if (nummer3 == 0){
        nulll++
    }
}

let result1 = (arr.length/100)*positiv
let result2 = (arr.length/100)*negativ
let result3 = (arr.length/100)*nulll
console.log("Positiv: "+result1+"% Negativ: "+result2+"% Null: "+result3+"%");