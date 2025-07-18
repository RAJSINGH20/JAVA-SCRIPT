// for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element === 5) {
    // console.log("5 is a best number");
  }
  // console.log(`The value of i is: ${element}`);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`outer loop : ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop :${j} and outerlopp : ${i}`);
    // console.log(`${i} * ${j} = ${i*j}`);
  }
}

let myarr = ["flash", "batman", "superman"];
for (let index = 0; index < myarr.length; index++) {
  const element = myarr[index];
  // console.log(element);
  // console.log(myarr.length);
}

// break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log(` detected ${i}`);
    continue;
  }
  // console.log(` value of ${i}`);
}

// while loop
// while (condition) {

// }

let index = 0;
while (index <= 10) {
  // console.log(` value of index is ${index}`);
  index = index + 2;
}

let myarray = ["flash", "batman", "superman"];
while (myarray < myarr.length) {
  // console.log(` value of arr ${myarr[myarray]}`);
  myarray = myarray + 1;
}

// dowhile
// do {

// } while (condition);

let score = 1;
do {
  // console.log(` score is ${score}`);
  score++;
} while (score <= 10);

// specific for array loops
// for of

// for (const element of object) {

// }

const arr1 = [1, 2, 3, 4, 5];
for (const num of arr1) {
  // console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
  // console.log(`each char is ${greet}`);
}

// maps

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United State Of America");
map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ' :- ', value);
}

//###########################################

const myobj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
};

for (const key in myobj) {
  // console.log(myobj[key]);
}

const pograming = ["js", "rb", "c", "c++"];
for (const [key] in pograming) {
  // console.log(key);
}

// for Each loop

const coading = ["js", "rb", "c", "c++"];

// using normal function
// type 1

coading.forEach(function (item) {
  // console.log(item);
});

// using arrow function
// type 2

coading.forEach((item) => {
  //   console.log(item);
});

// using function
// type three

function printme(item) {
  // console.log(item);
}
coading.forEach(printme);

const mycoading = [
  {
    languagename: "javascript",
    filenamne: "js",
  },
  {
    languagename: "java",
    filenamne: "j",
  },
  {
    languagename: "c",
    filenamne: "C",
  },
  {
    languagename: "C++",
    filenamne: "C++",
  },
];

mycoading.forEach((item)=>{

    // console.log(item.languagename);
    // console.log(item.filenamne);
    // console.log(item);
    
})


const mynum =[1,2,3,4,5,6,7,8,9,10]

// const newnums= mynum.filter((num)=>4)
// const newnums= mynum.filter((num)=>{
//   return num >4
// })

const newnums = []
newnums.forEach((num)=>{
  if(num >4){
    newnums.push(num)
  }
})

// console.log(newnums);


const num=[1,2,3,4,5]

// normal function
// const total = num.reduce( function(acc , currval){
//   console.log(` accumulator ${acc} and current value ${currval}`);
  
//   return acc+currval
// },0)


// using arrow function

const total = num.reduce((acc,currval)=>{ 
  console.log(` accumulator ${acc} and current value ${currval}`)
  return acc+currval},0)

console.log(total);
