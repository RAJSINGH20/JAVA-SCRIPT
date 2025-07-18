// const useremail = "user@example.com";
// if (useremail) {
//   console.log("Email is present");
// } else {
//   console.log("Email is not present");
// }

const useremails = "";
const username = [];
if (useremails) {
  console.log("Email is present");
} else {
  console.log("Email is not present");
}

/*

falsy values in JavaScript:

false,0,-0, bigint 0n ,"",null,undefined,NaN

truthy values in JavaScript:

true,1,-1, 2n,"0","false",[],{},function(){}," "

*/

if(username.length === 0) {
  console.log("Username is not present");
}

const emptyobj={};
if (Object.keys(emptyobj).length === 0) {
  console.log("Object is empty");
  
}