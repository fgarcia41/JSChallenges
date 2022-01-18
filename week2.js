// Very Easy

function min (x,y){
 if (x > y){
     return y;
 }
 else{
     return x;
 }
}


// Easy

var students = [
{lastName: 'Garcia',
firstName: 'Fernando',
age: 24
},
{
    lastName: 'Smith',
    firstName: 'Dyl',
    age: 25
},
{
    lastName: 'Doe',
    firstName: 'John',
    age: 26
}
]
let student2 = students[1]

console.log(`Hello My name is ${student2.firstName} ${student2.lastName} and im ${student2.age} years old.`)

// Medium

var prompt = window.prompt("Write a number")

function findMonth(x){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    if (x > 12 || x < 1 ){
        alert("Not a valid number")
    }

    return months[x - 1]
    
}

console.log(findMonth(prompt))

// Hard

let tom = {
    height: 9,
    mass: 8
}

let jerry = {
    height: 10,
    mass: 45
}

function bmi(mass, height){
   return mass / (height * height)
}

let isTomBigger = bmi(tom.mass, tom.height) > bmi(jerry.mass, jerry.height)

console.log(`Is Toms bmi bigger than Jerrys ${isTomBigger}`)