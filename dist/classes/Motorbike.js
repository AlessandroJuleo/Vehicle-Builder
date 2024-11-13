// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    constructor(vin, color, make, model, year, weight, topSpeed, wheels = [new Wheel(), new Wheel()]) {
        // Call the constructor of the parent class, Vehicle
        super();
        // Initialize properties of the Motorbike class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Check if the wheels array has 2 elements
        // If not, create 2 new Wheel objects
        // Otherwise, use the provided wheels array
        if (wheels.length !== 2) {
            this.wheels = [new Wheel(15, 'Harley Davidson'), new Wheel(16, 'Harley Davidson')];
        }
        else {
            this.wheels = wheels;
        }
    }
    // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie() {
        if (this.started) {
            console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
        }
        else {
            console.log(`Start the vehicle first.`);
        }
    }
    // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Motorbike
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    printDetails() {
        // Call the printDetails method of the parent class, Vehicle
        super.printDetails();
        // Print details of the Motorbike class
        console.log(`VIN: ${this.vin}
      COLOR: ${this.color}
      MAKE: ${this.make}
      MODEL: ${this.model}
      YEAR: ${this.year}
      WEIGHT: ${this.weight} lbs
      TOP SPEED: ${this.topSpeed} mph
      Wheels: ${this.wheels.length}`);
        // Print details of the wheels
        console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
        console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
