const name = "Raj singh"
const repocount = 5

// console.log(name +repocount + "value")       # outdated

// console.log(`heloo my name is ${name} my repo count is ${repocount}`);

// console.log(name.__proto__)
// console.log(name.lenght)
// console.log(name.toUpperCase());
// console.log(name.charAt(2));


const newsstring = name.substring(0,4)
// console.log(newsstring);

const anotherstring =name.slice(-3,0)
// console.log(anotherstring);

const newsstringone = "     raj    "
// console.log(newsstringone)
// console.log(newsstringone.trim())

const url = "https://raj.com/hitesh/%20/singh"

console.log(url.replace('%20', '-'))
console.log(url.includes('raj'))
