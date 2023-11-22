/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
  constructor(model) {
    this.model = model;
    this.currentSpeed = 0;
  }
  acceleration() {
    this.currentSpeed++;
  }
  break() {
    this.currentSpeed--;
  }
  toString() {
    console.log(
      `${this.model} is travelling at the speed of ${this.currentSpeed} mph`
    );
  }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */ 3;
const ElectricCar = new Car("ElectricCar");
ElectricCar.acceleration();
ElectricCar.acceleration();
ElectricCar.break();
ElectricCar.toString();

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const myCar = new Car("Titan");
myCar.acceleration();
myCar.acceleration();
myCar.break();
myCar.toString();
