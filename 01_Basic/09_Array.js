//      #Array

const myarr = [0, 1, 2, 3, 4, 5];

console.log(myarr[0]);

const myarr2 = new Array(1,2,3,4,5)
console.log(myarr2[0])

//          array methods

myarr.push(7)       //add element
console.log(myarr)

myarr.pop(7)        //remove element
console.log(myarr)

myarr.unshift(9)    //add element at first
console.log(myarr)

myarr.shift(9)      //remove element at first 
console.log(myarr)

console.log(myarr.includes(9))
console.log(myarr.indexOf(3))


const newarr = myarr.join() // converted on string
console.log(myarr)
console.log(newarr)

//  slice or splice

console.log("a",myarr)

const myn1 = myarr.slice(1,3)
console.log("b",myarr)
console.log(myn1)       // not including last index 

const myn2 = myarr.splice(1,3)
console.log("C",myarr)
console.log(myn2)       // including last index 

const all_arr =[...myarr, ...myarr2 ,...myn1]
console.log(all_arr)        // using spread operator merge all array properly

console.log(Array.from("raj"))
console.log(Array.from({name:"raj"}))

let score1=100
let score2=400
let score3=300

console.log(Array.of(score1, score2 , score3))