/* Completing tests from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript */
/* The aim of this skill test is to assess whether I've understood MDN's Classes in JavaScript article. */

/* OOJS test 1 */
class Shape {

    name;
    sides;
    sideLength;
      constructor(name,sides,sideLength){
          this.name = name;
          this.sides = sides;
          this.sideLength = sideLength;
  }
  calcPerimeter(){
      return (this.sides * this.sideLength);
  }
}

const square = new Shape('square', 4, 5);
square.calcPerimeter() // 20

const triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter() // 9