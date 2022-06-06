/* The guide for this is https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes */

/* All objects in js have built in properties including a property that is called the prototype which is itself an object. The prototype chain is prototypes of prototypes until the end of this pattern being null. */

/* To find specifically what an object's prototype is, use Object.getPrototypeOf() */
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object {...}
// null

/* An example of shadowing properties is if a property is created on an object which already has a property with the same name on it's prototype. When that recurring property name is called on the object, the other property not the one on the object's prototype will be accessed. */

/* js code example of property shadowing is below */

const date = new Date()
date.getHours() // current hours
// but then I shadow the property .getHours()
date.getHours = function(){
    return "Date.prototype.getHours() has been shadowed."
}
date.getHours() // Date.prototype.getHours() has been shadowed.

/* Setting Prototypes */

/* 2 ways of setting an object's prototype in JS is Object.create() and constructors, but there are more ways than this */

const personPrototype = {
    greet(name) {
        return `Hello, I'm ${name}, what's your name?`
    },
    chill(activity) {
        return `I'm chilling, ${activity}.`
    }
}
const mauro = Object.create(personPrototype)
mauro.greet('J') // Hello, I'm J, what's your name?
mauro.chill('watching a show on netflix') // I'm chilling, watching a show on netflix.

// mauro besides it's prototype personPrototype, is an empty object.

/* Is a prototype where the built in properties like toString are located? Yes, until the end of the prototype chain which is always null. */
console.log({name: 'J', pet: 'Cutie'}) // When this object is opened, it has 3 properties, (name, pet, [[prototype]])
/* __proto__ is the standard property for looking inside of an object's prototype where built-in properties can be found. */
console.log({}.__proto__.constructor) /* takes us straight to the built-in properties on the prototype of this object. Without accessing __proto__ [[prototype]] is it's only property */

/* Using a constructor */

const charPrototype = {
    greet() {
      return `Hello, my name is ${this.name}!`;
    }
  }
  
  function Person(name) { //constructor function
    this.name = name;
  }
  const jerry = new Person('Jerry')
  jerry.name // returns Jerry, as the jerry object was created 
  jerry.__proto__ // returns Person {}
  Person.prototype = charPrototype;
  Person.prototype.constructor = Person; /* setting the constructor of Person.prototype (which is now charPrototype) */
  /* Why not just say Person.greet = function(){return `Hello, I'm ${this.name}!} so
  we can access the greet method from the constructor? */
  Person.greet = function(){return `Hello, I'm ${this.name}!`} /* methods shouldn't be placed on constructors but instead on the prototype */
const dan = new Person('Dan')
dan.greet()// Hello, my name is Dan! 
/* When dan.greet() is called, what happens is the greet method is found in dan's prototype and at the same time the name property is accessed through dan's prototype's constructor function which is Person {}. An argument passed in the place of a parameter is 'Dan'. 
 */

/* Own Properties */

Object.hasOwn(dan, 'greet') /* false, because the greet method is not located directly on the surface level of the dan obj but instead on the prototype */

Object.hasOwn(dan, 'name') // true, because the constructor function Person

/* Prototypes and inheritance */

// Objects of Professors and Students can share common methods like greet() on their prototype and data properties (like name) on their constructor. As it's a common pattern to define methods on the prototype as they stay the same, while data properties are defined on the constructor to feed values to the methods on the prototype.
  