
const str="This is JavaScript Code"
//console.log(str);
let arr3=str.split(' ').reverse().join(" ")
let arrsr=str.split(' ').map((strvalue)=>strvalue.split("").reverse().join("")).join(" ")
console.log(arrsr)
console.log(arr3)
 