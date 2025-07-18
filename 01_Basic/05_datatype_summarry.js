//    primitive

// 7 types = String, Number ,Boolean , null , undefiend ,Symbol, BigInt


const score = 100
const scorevalue = 100.9

const loggedin = false
const outsidetemp = null
let useremail;

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(Symbol === anotherid);

const bignumber = 4578686857868n   // BigInt


// refence (non primitive)

// Array , Objects , function


const heros = ["shaktiman", "superman", "doga"]

let myobj = {
    name: "raj",
    age: 23,
}

const mufuncytion = function (){
    console.log("hello world");
    
}

console.log(typeof bignumber);



//###########################################################

// stack (Primitive) , Heap (non-Primetive)

myYoutubeName="RAJ SINGH"

let AnotherName = myYoutubeName;
AnotherName = "sunita singh"

console.log(myYoutubeName)
console.log(AnotherName)

let userone ={
    email:"rajsi9ngh@gmai.com",
    name : "rajsingh"
}
let usertwo = userone

usertwo.email= "singhdgp@gmail.com"


console.log(userone.email);
console.log(usertwo.email);
