const temperaturesWeek1 = "-1,5,1,-10,-11,2,30,-8,-14";
const temperaturesWeek2 = "-1,5,3,-10,-11,2,30,-8,-44";
// Berechne den Mittelwert der Temperaturen der beiden Wochen
// Gib aus
// Mittelwert Woche 1 : xxx
// MIttelwert Woche 2 : xxx
// "Woche 1 war wärmer" oder "Woche 2 war wärmer" oder "Beide Wochen waren gleich warm"

let arr1 = temperaturesWeek1.split(",");

let summe1 = 0;

for (let i = 0; i < arr1.length; i++) {
    summe1 += parseInt(arr1[i]);
}

let mittelwert1 = summe1 / arr1.length;

console.log("Mittelwert Woche 1: " + mittelwert1);

let arr2 = temperaturesWeek2.split(",");

let summe2 = 0;

for (let i = 0; i < arr2.length; i++) {
    summe2 += parseInt(arr2[i]);
}

let mittelwert2 = summe2 / arr2.length;

console.log("Mittelwert Woche 2: " + mittelwert2);

if (mittelwert1 > mittelwert2) {
    console.log("Woche 1 war wärmer");
} else if (mittelwert1 < mittelwert2) {
    console.log("Woche 2 war wärmer");
} else {
    console.log("Beide Wochen waren gleich warm");
}