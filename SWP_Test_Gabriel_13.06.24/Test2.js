//Berechne die Summe der geraden durch die Summe der ungeraden Zahlen
const data2 = "1,2,3,4,5,6,7,8,9,10,11,12"
let arr = data2.split(",")
let gerade = 0
let ungerade = 0
for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) % 2 !== 0) {
        ungerade += parseInt(arr[i])
    }

}

for (let r = 0; r < arr.length; r++) {
    if (parseInt(arr[r]) % 2 == 0) {
        gerade += parseInt(arr[r])
    }
}

let result = gerade / ungerade
console.log(result);