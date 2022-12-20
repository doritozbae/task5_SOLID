// LISKOV SUBSTITUTION - objects of a superclass should be replaceable
//                       with objects of its subclasses without breaking
//                       he application.
// In other words, what we want is to have the objects of our subclasses
// behaving the same way as the objects of our superclass

// We remove the Square class and bring its logic to the Rectangle class
// w/o changing its purpose.

class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }

  public isSquare(): boolean {
    return this.width === this.height;
  }
}

// Example for JS

// class Bird {
//   layEgg() {}
// }

// class FlyingBird {
//   fly() {}
// }

// class SwimmingBird extends Bird {
//   swim() {}
// }

// class Eagle extends FlyingBird {}
// class Penguin extends SwimmingBird {}

// const penguin = new Penguin();
// penguin.swim();
// penguin.layEgg();

// const eagle = new Eagle();
// eagle.fly();
// eagle.layEgg();
