// Erstelle eine Variable banana mit dem Wert "Banane" 
let banana = "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple" 
let apple = "Apple"

 

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14 
let bananaPricePerKilo = 2.14

// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43 
let applePricePerKilo = 3.43
 

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo 
let appleweigth = 0.34

// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo 
let bananaweight = 0.22

 

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel 
let amountOfApplesPerKilo = 1 / appleweigth
console.log("Anzahl Äpfel pro Kilo = " + amountOfApplesPerKilo);
let amountOfBananasPerKilo = 1 / bananaweight
console.log("Anzahl Bananen pro Kilo = " + amountOfBananasPerKilo);
let priceOfOneApple = applePricePerKilo / amountOfApplesPerKilo;
console.log("Preis pro Apfel = " + priceOfOneApple);
let priceofonebanana = bananaPricePerKilo / amountOfBananasPerKilo
console.log("Preis pro Banane = " + priceofonebanana);
// Preis von 8 Äpfeln 
result = priceOfOneApple * 8
console.log("8 Äpfel kosten "+ result);
// Preis von 17 Bananen 
result = priceofonebanana * 17
console.log("17 Bananen kosten " + result);
// Preis von 1 Tonne Äpfel 
result = applePricePerKilo * 1000
console.log("1 Tonne Äpfel kostet " + result);
// Preis von 1 Tonne Bananen 
result = bananaPricePerKilo * 1000
console.log("1 Tonne Bananen kostet " + result);