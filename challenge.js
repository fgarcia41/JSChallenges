
// // Very Easy
// var num1 = 5;
// var num2 = 3;
// console.log("the difference between " + num1 + " and " + num2 + " is " + (num1 - num2))

// // Easy

// var name1 = "Fernando";
// var name2 = "Josh";
// var longerName = ""
// var shorterName = ""

// if (name1.length > name2.length){
//     longerName = name1;
//     shorterName = name2;
// }
// else {
//    longerName = name2;
//    shorterName = name1;
// }
// var diff = longerName.length - shorterName.length
// console.log("The name " + longerName + " is longer than " + shorterName + " by " + diff + " characters");


// // Medium

// let result = window.prompt("message here", "");

// if (result == result.toUpperCase()){
//     console.log("shouting")
// }

// else if(result == result.toLowerCase()) {
//     console.log("whispering")
// }

// else {
//     console.log("normal")
// }


// // hard

// /*
// * adds x + y
// * @param {number} the first number
// * @param {number} the second number
// * returns x + y
// */
// function add(x,y) {
//    return x + y
// }
// console.log(add(5,2))


// function subtract(x,y) {
//     return x - y
// }
// console.log(subtract(5,3))

// function multiply(x,y) {
//     return x * y
// }
// console.log(multiply(5,3))

// function divide(x,y) {
//     return x / y
// }
// console.log(divide(10,2))


// // Very hard
// let firstNumber = window.prompt("add your first number")

// let operator = window.prompt("operation (+ - * /)")

// let secondNumber = window.prompt("add your second number")

// // var pointNum = parseFloat(firstNumber)

// // var pointNum2 = parseFloat(secondNumber)

// /**
//  * Returns the outcome.
//  *
//  * @param {number} x The first number
//  * @param {number} y The second number
//  * @param {string} operator + - * /
//  * @return {number} outcome of the math operation
//  */
// function doMath(x,y,operator) {
    
//     if (isNaN(x)){
//         alert("First number you entered is not a valid number")
//     }

//     if (isNaN(y)){
//         alert("Second number you entered is not a valid number")
//     }

//     if (operator == "+"){
//         return add(x,y)
//     }

//     else if (operator == "-"){
//         return subtract(x,y)
//     }

//     else if (operator == "*"){
//         return multiply(x,y)
//     }

//     else if (operator == "/"){
//         return divide(x,y)
//     }

//     else{
//         console.log("add a valid operator")
//     }

// }
// var outcome = doMath(parseFloat(firstNumber), parseFloat(secondNumber), operator)

// console.log(firstNumber + " " + operator + " " + secondNumber + "=" + outcome )




