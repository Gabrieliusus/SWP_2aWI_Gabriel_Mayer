//gib nur die Wörter aus, die ein e enthalten
const data3 = "Hans ist ein netter Kerl!"
let arr = data3.split(" ")
let e = ""
for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    for (let r = 0; r < word.length; r++) {
        if (word[r]=="e") {
            e+=word+" "
            break
        }
        
    }
}
console.log(e);