/* 

 * Suche alle geraden Zahlen (modulo) und berechne 

 * den Mittelwert dieser 

 * 

 * (4 + 10 + 2 + 14) / 4 

 */ 

const data1 = "4,9,-3,-9,-5,10,2,1,14"; 
let arr1 = data1.split(",");

let summe1 = 0;

for (let i = 0; i < arr1.length; i++) {
    if (parseInt(arr1[i]) % 2 !== 0) {
        summe1 += parseInt(arr1[i])
    }
}

let Mittelwert = summe1 / arr1.length;

console.log(Mittelwert);
