// Easy

let numArray = [1, 4, 7]
function average(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++)
    sum += numbers[i];
    return sum / numbers.length
}

console.log(average(numArray))


// Meidum
let randomArray = [0,1,2,4,5,6,7]
console.log(randomArray.indexOf(4));

function checkIndexOf(numbers, x){
    return numbers.indexOf(x)
}
console.log(checkIndexOf(randomArray,4))

// Hard








// Very hard