/* 

 * Suche alle geraden Zahlen (modulo) und berechne 

 * den Mittelwert dieser 

 * 

 * (4 + 10 + 2 + 14) / 4 

 */ 

const data1 = "4,9,-3,-9,-5,10,2,1,14"; 
let arr = data1.split(",")
let summe = 0
let summe1 = 0
for (let i = 0; i < arr.length; i++) {
    let zahl = parseInt (arr[i]);
    if (zahl%2==0){
    summe+=zahl
summe1++}
}
let Mittelwert = summe/summe1
console.log(Mittelwert);