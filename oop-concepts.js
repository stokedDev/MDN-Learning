/* This file is to follow along with https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming */

/* 
Usually when people refer to Object Oriented Programming(OOP), they are talking about
class-based or "classical" OOP. 3 main concepts of OOP are classes and instances, inheritance, and encapsulation.

Classes and Instances:
In OOP, objects(or instances) are created by calling
the constructor from a class while filling in it's parameters with arguments 
such as data properties(attributes) which can be values like strings and numbers.
Instance data properties can give instance methods information to do things with.
A class is a blueprint to create certain kinds of subclasses and instances.

A question:
What are the placeholders (for instance attributes and methods) in the class called?
My answer:
They're called "definitions", or more specifically "data definitions" or "method definitions".
brilliant.org calls them, "initial values for state(member variables), and implementations of behavior(member functions/methods)." They can also be called "Class fields".

Inheritance:
"super classes" or in other words "parent classes" create "child classes" or in other words "subclasses" through their called constructors. 
"super classes" are the origin of a hierarchy of classes. They give access to general data and method definitions which their descendants can also have along with new ones just for themselves and their descendants.

When related classes share the same name for a method but differ in implementation, it's called polymorphism.
When a method of a "super class" has a different implementation in a "subclass" we say that the subclass overrides the version in the superclass.

Encapsulation:
Unlike procedural programming where functions and variables are created without being contained together,
OOP classes make it so we can keep related member methods and member variables together in one place.
Keywords can be used when creating definitions within a class to make such definitions public or private.
If within a class a definition is made public, it is accessible from outside.
If within a class a definition is made private, it is not accessible from outside.

OOP and JavaScript:
Constructors and the prototype chain allow for similiar control as "classical" OOP.
JS is capable of being used as classbased OOP which is discussed in the next MDN article.
*/
