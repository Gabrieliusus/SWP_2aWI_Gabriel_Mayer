//Multipliziere jede 3te Zahl und dividiere durch die Anzahl der geraden Zahlen 
// (5 * 4 * 3) / 3 = 20

const data1 = "5,2,3,4,1,2,3,5"
let arr = data1.split (",")
let dritte = 1
let gerade = 0
for (let i = 0; i < arr.length; i+=3) {
    dritte *= parseInt(arr[i])
    
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0){
        gerade++
    }   
}
let result = dritte / gerade
console.log(result);