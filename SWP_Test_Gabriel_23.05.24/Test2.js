// Gib den Satz rückwärts aus und verdopple jeden Buchstaben 

// nnööhhccss.... 

const data2 = "Das Leben ist schön"; 
let arr = data2.split ("");
let result = 0
for (let i = arr.length; i < 0; i--) {
    let buchstabe = parseInt(arr[i])
    if (buchstabe!=" ") {
        result+=buchstabe
    }
}
console.log(result);