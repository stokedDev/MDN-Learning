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
Ash.think() // Ash is thinking.
const Char = new Character() // 'Char' will automatically be the argument because it is truthy while name is falsy.
Char.think() // Char is thinking


/* -Omitting constructors-
If you want to make a class without allowing inputting unique data into it's constructor, then omit the constructor when creating a class, as a default constructor will be created for it by JS allowing */
class Food {
    beingEaten(){
        return `This ${this.self || 'food'} is being eaten.`
    }
}
const pizza = new Food()
pizza.beingEaten() // returns "This food is being eaten." as this.self is currently undefined and falsy while 'food' is truthy
pizza.self = 'pepperoni pizza'
console.log(pizza)
pizza.beingEaten()//? 
// returns "This pepperoni pizza is being eaten." 

const obj = {
    name: 'Cat',
    greet(){
        return `Hi, I'm ${this.name}.` // I just learned that in an object you can access a data property elsewhere inside the object by using the "this" keyword like I did on this line in my return statement.
    }
}
obj.greet()// Hi, I'm Cat.