// Easy

var run = exercise('running');

console.log(run()); // prints "Today's exercise: running"

var swim = exercise('swimming');

console.log(swim()); // prints "Today's exercise: swimming"

function exercise(exercise){
        return () => `Today’s exercise: ${exercise}`
}


// Medium

//  Sets sharePizza to cutPizzaSlices
var sharePizza = cutPizzaSlices(8);

function cutPizzaSlices(slices) {
        return (people) => `Each person gets ${slices/people} slices of pizza` 
        
}

console.log(sharePizza(2));                                                                                                                                                                    

  // prints "Each person gets 4.00 slices of pizza"

console.log(sharePizza(3)); 

  // prints "Each person gets 2.67 slices of pizza"
