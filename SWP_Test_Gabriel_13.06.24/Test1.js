//Multipliziere jede 3te Zahl und dividiere durch die Anzahl der geraden Zahlen 
// (5 * 4 * 3) / 3

const data1 = "5,2,3,4,1,2,3,5"
let arr = data1.split (",")
let gerade = 0
let a = 1
for (let i = 0; i < arr.length; i++) {
    let zahlen = parseInt(arr)
    
    if (i%3==0){
        let dritte = parseInt(arr[i])
        
        a *= dritte
        
    }
    if (zahlen%2==0){
        
        gerade++
        
    }
    console.log(gerade)

    
    
}