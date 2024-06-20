const numbers = "8,2,1,4,6,1,8,7";
// Zähle alle Zahlen die zwischen 4 (inklusive und 8 exklusive) liegen
// Output: 3

let arr = numbers.split(",")

let zahl = 0

for (let i = 0; i < arr.length; i++) {
    let nummer = parseInt(arr[i])
    if (nummer >= 4 && nummer < 8){
        zahl++
    }
    
}

console.log(zahl);