// const { use } = require("react");

// function sayMyName() {
//   console.log("hello");
// }
// // sayMyName()

// function addtwonumber(num1, num2) {
//   console.log(num1 + num2);
// }
// addtwonumber(3,8)


//arrow function
const user ={
  username: "Raj",
  price: 100,
  welcomeMessage: function() {
    console.log(`Welcome ${this.username}, your price is ${this.price}`);
    // console.log(this); 
  }

}

// user.welcomeMessage(); // Welcome Raj, your price is 100
// user.username = "Ravi";
// user.welcomeMessage(); // Welcome Ravi, your price is 100
// console.log(this);


function chai(){
  let chai = "chai";
  console.log(this.chai);   // logs global object in non-strict mode, undefined in strict mode
  // console.log(chai);     // logs "chai" in non-strict mode, ReferenceError
}
chai(); // logs global object in non-strict mode, undefined in strict mode

const chaiArrow = () => {
  let chai = "chai";
  console.log(this
     
  );   // logs global object in non-strict mode, undefined in strict mode
  // console.log(chai);     // logs "chai" in non-strict mode, ReferenceError
}
chaiArrow(); // logs global object in non-strict mode, undefined in strict mode

// const addtwo = (num1, num2) => {
//   return num1 + num2;

// }
// const addtwo = (num1, num2) =>  num1 + num2;

const addtwo = (num1, num2) =>  (num1 + num2);

console.log(addtwo(5, 10)); // returns 15

const myarr = [1, 2, 3, 4, 5];
myarr.forEach((element, index) => {
  console.log(`Element: ${element}, Index: ${index}`);
});