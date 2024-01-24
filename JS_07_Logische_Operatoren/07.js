let randomNumber = Math.random() * 100
let randomNumber2 = Math.random() * 100
if ((randomNumber<randomNumber2)&&(randomNumber<50)){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
}
if((randomNumber<30)||(randomNumber2<30)){
    console.log("Eine der beiden ist kleiner als 30")
}
if((randomNumber<50)&&(randomNumber2!=50)){
    console.log("Erste Zahl ist klein, zweite kein 50iger")
}