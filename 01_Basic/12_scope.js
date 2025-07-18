// let a = 10;
// const b = 20;
// var c = 300;  // var is function/global scoped


let a = 10; // block scoped (with let)
if (true) {
    let a = 40; // block scoped, only inside this if
    const b = 50; // block scoped, only inside this if
    function add(){
        const c = 60; // function scoped, only inside add
    }
    add();
}
// console.log(a); // 10, 'a' outside if block
// console.log(b); // ReferenceError: b is not defined (b is block scoped)
// console.log(c); // ReferenceError: c is not defined (c is inside add function)


// Example for block scope in loops
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     // 'i' and 'element' are block scoped to this loop
// }

function one(){
    const user = "Raj";
    function two(){
        const name = "Ravi";
        console.log(user); // "Raj", can access parent scope
    }
    // console.log(name); // ReferenceError: name is not defined (name is scoped to two)
    // two();
}
// one(); // logs "Raj"

if (true) {
    const username = "Raj";
    if (username === "Raj") {
        const age = 25;
        console.log(`User: ${username}, Age: ${age}`); // logs "User: Raj, Age: 25"
    }
    // console.log(age)
}

// Example

console.log(addone(5)); // returns 6
function addone(num) {
    return num + 1;
}


const addtwo = function(num) {
    return num + 2;
}
console.log(addtwo(5)); // returns 7