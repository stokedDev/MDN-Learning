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

/* Is the prototype where the built in properties like toString are located? Yes. */
/* __proto__ is the standard property for looking inside of an object's prototype where built-in properties can be found. */
console.log({}.__proto__) // takes us straight to the built-in properties on the prototype of this object