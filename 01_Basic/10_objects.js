// singleton
// Object.create  // constructor

const tinder = new Object();

tinder.id = "123";
tinder.name = "raj";
// console.log(tinder);

const regularuser = {
  email: "rajsingh@gmail.com",
  fullname: {
    userfullname: {
      firstname: "RAJ ",
      lastname: " raj singh",
    },
  },
};

// console.log(regularuser.fullname?.userfullname);

const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};

const obj2 = {
  4: "d",
  5: "e",
};

// const objt3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 ={...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));


// object liuterals

const mysym = Symbol("key1");

const jsuser = {
  name: "raj",
  age: 23,
  email: "rajsingh@gmail.com",
  isloggedin: false,
  [mysym]: "key1",
  lastloggedin: ["monday ", "saturtday"],
};

// console.log(jsuser.email);
// console.log(jsuser[mysym]);
// console.log(typeof mysym);

jsuser.greeting = function () {
  console.log(`hello js user, ${this.name}`);
};
// console.log(jsuser.greeting());


const coursae = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor :"RAJ"
}

