const data = "Hans geht heute schwimmen! das ist gut";
// Gib jedes 3te Wort aus
// Output
// Hans schwimmen gut
let arr = data.split (" ")
for (let i = 0; i < arr.length; i+= 3) {
   console.log(arr[i])
}