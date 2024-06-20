// Multipliziere alle ungeraden Zahlen miteinander 
// und dividiere durch die Anzahl der geraden Zahlen 
// (2*4*2...)/6 
const data1 = "5,2,3,4,1,5,2,3,10,-11";

let arr = data1.split(",")
let gerade = 0
let ungerade = 1
for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i])%2==0){
        gerade++
    }
    
}

for (let i = 0; i < arr.length; i++) {
    if(parseInt(arr[i])%2!=0){
        ungerade *= parseInt(arr[i])
    }
}

let result = ungerade / gerade
console.log(result);