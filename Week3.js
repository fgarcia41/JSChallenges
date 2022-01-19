// Easy

var run = exercise('running');

console.log(run()); // prints "Today's exercise: running"

var swim = exercise('swimming');

console.log(swim()); // prints "Today's exercise: swimming"

function exercise(exercise){
    return (exercise) => {
        return "Todays exercise:" + exercise
    }
}