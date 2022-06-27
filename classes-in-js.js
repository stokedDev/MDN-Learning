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
