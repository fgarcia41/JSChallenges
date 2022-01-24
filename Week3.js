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


//   Hard

let createPii = (function(){
  let pii = {
    name: 'fernando',
    ssn: 111111111,
  }
  return {
    getName: function() {
     return pii.name
    }
  }
})();
console.log(createPii.getName())




// Very hard

function Person(name, job, age,) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.exercise = function () {
    console.log('Running is fun!');
  }
  this.fetchJob = function() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

function Programmer(name, job, age, languages) {
  Person.call(this, name, job, age);
  this.languages = languages;
  this.busy = true;
  this.completeTask = function () {
    this.busy = false;
  }
  this.acceptNewTask = function (){
    this.busy = true;
  }
  this.offerNewTask = function (){
    if(this.busy){
      console.log(`${this.name} cant accept any new tasks right now `);
    }else{
      console.log(`${this.name} would love to take on a new responsibility`)
    }
  }
  this.learnLanguage = function(languages){
    this.languages.push(languages)
  }
  this.listLanguages = function(){
    console.log(this.languages)
  }
}
// https://stackoverflow.com/questions/48343014/how-to-link-two-constructors-and-inherit-them-as-prototype-to-an-object 
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
let fernando = new Programmer('Fernando', 'Back-end Developer', 24, ['html', 'css'] )
console.log(fernando)