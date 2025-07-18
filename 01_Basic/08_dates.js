let my_dates = new Date()

console.log(my_dates)
console.log(my_dates.toString())
console.log(my_dates.toDateString())
console.log(my_dates.toLocaleDateString())
console.log(typeof my_dates)

let mycreatedate = new Date(2023,0,23)
console.log(mycreatedate.toDateString());


let mytime = Date.now()
console.log(mytime)
console.log(mycreatedate.getTime())

let newdate = new Date()
console.log(newdate);
console.log(newdate.getTime());
console.log(newdate.getDate());
console.log(newdate.getDay());
