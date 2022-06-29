// this file is to follow along with https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

/* Classes and Constructors */

class Character {
    constructor(name){ /* the constructor is how new instances of this class are made and it's parameters
                           allow us to input specific data to create an object. */
        this.name = name || 'Char'; /* If no name is given as an argument for the constructor, 'Char' will be this.name as name would be a falsy value while 'Char' is a truthy value. */
    }
    think(){
        return `${this.name} is thinking.`
    }
}

const Ash = new Character('Ash')
Ash.think() // returns Ash is thinking.
const Char = new Character() // 'Char' will automatically be the argument because it is truthy while name is falsy.
Char.think() // returns Char is thinking


/* -Omitting constructors-
If you want to make a class without allowing inputting unique data into it's constructor when it's called, then omit the constructor when creating a class, as a default constructor will be created for it by JS allowing us to take advantage of such a class */
class Food {
    beingEaten(){
        return `This ${this.self || 'food'} is being eaten.`
    }
}
const pizza = new Food()
pizza.beingEaten() // returns "This food is being eaten." as this.self is currently undefined and falsy while 'food' is truthy
pizza.self = 'pepperoni pizza'
console.log(pizza)
pizza.beingEaten() // returns "This pepperoni pizza is being eaten." 

const obj = {
    name: 'Cat',
    greet(){
        return `Hi, I'm ${this.name}.` // I just learned that in an object you can use a data property elsewhere inside the object by using the "this" keyword like I did on this line in my return statement.
    }
}
obj.greet()// returns Hi, I'm Cat.

/* Inheritance */

class Monster extends Character{ // Monster is created as a subclass of Character (which is now a superclass because it has a subclass) 
    constructor(name, color){
        super(name); // this syntax with the "super" keyword brings the name property in from the Character class
        this.color = color || 'purple';
    }
    attack(){ // here I add a new method that Monster has but it's parent class(or superclass) doesn't have.
        return `${this.name} is ${this.color} and is attacking.`
    }
}
const grotus = new Monster('Grotus', 'dark-purple') /* if we use an empty string for the name property, "Char" will be used as the name of the Monster instance grotus. */
grotus.attack()// Grotus is dark-purple and is attacking.
grotus.color = 'dark-red' // On this line the Monster instance grotus gets it's color data property changed to dark-red
grotus.attack() // returns Grotus is dark-red and is attacking.
grotus.think() // returns Grotus is thinking.

/* Encapsulation */
/* Encapsulation means that a class is enclosed in a certain way. Classes can vary in how they are encapsulated with some having less or more private or public fields. */
/* A hash sign (#) placed before a class field makes such class field a private class field only accessible inside it's class, this encapsulation is enforced by JavaScript itself. Class fields are public by default. */

class Car{
    #serialNumber; /* We need to declare this private class data field here to make it usable ( but still not directly accessible from the outside as in jeep.#serialNumber) if it's used in a public method(from inside the Car class) as in driveSpeed().
      */
    constructor(serialNumber,color,brand,kind,speed){/* With this constructor, spaces are made for properties to be filled in when the constructor is called, getting access to all the public class methods and state when a new instance object is created. */
        this.#serialNumber = serialNumber;
        this.color = color;
        this.brand = brand;
        this.kind = kind;
        this.speed = speed;
    }
    #drive(){ /* because of the hash sign this is now a private method only accessible to the Car class itself yet since #drive() is called in the public method driveSpeed(), it's return result is included in driveSpeed()'s return statement when it's called as in jeep.driveSpeed() */
        return `A ${this.brand} ${this.kind} with a serial number of ${this.#serialNumber} is driving.`
    }
    driveSpeed(){ // see comment for #drive() and comment for #serialNumber; which both touch on this method.
        return `${this.#drive()} It is going ${this.speed}.`
    }
}

const jeep = new Car('99F', 'red', 'Ford', 'Spark', '45mph') /* a Car instance of jeep is created with it's parameters filled in with arguments */

jeep.driveSpeed() // returns A Ford Spark with a serial number of 99F is driving. It is going 45mph.