//. if

if (true) {
  console.log("This will run");
}
if (false) {
  console.log("This will not run");
}

const score = 200;
if (score > 100) {
  console.log("You scored more than 100");
  let power = "fly";
  console.log("Your power is: " + power);
}
// console.log("Your power is: " + power); // ReferenceError: power is not defined (power is block scoped to the if block)

const uselogin = true;
const debitcard = true;
const loginfromgoogle = false;
const loginfromemail = true;
if (uselogin && debitcard && 2 == 2) {
  console.log("allow to buy courses");
}

if (loginfromgoogle || loginfromemail) {
  console.log("allow to login");
}

// nullish coalescing operator (??): null undefined
let val1
// val1=5 ?? 10
// val1= null ?? 10
// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20;
console.log(val1); // 20

// ternary operator
// condition ? true : false

const iceteaa= 100

iceteaa <=80 ? console.log("less than 80") : console.log("more than 80");
iceteaa >=80 ? console.log("less than 80") : console.log("more than 80");


