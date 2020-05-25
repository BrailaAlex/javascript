export class Vehicle {
    constructor(name, numberOfWheels) {
        this.numberOfWheels = numberOfWheels;
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);

    }
};


export class Ship extends Vehicle {
    constructor(name, numberOfWheels, maxSpeed) {
        super(name, numberOfWheels); // link to the constructor of the parenting class
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move(); //via link super we refer to parent class method vehicle.move();
    }
    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
    }
};

// const ship1 = new Ship('Agata', 17);
// console.log(ship1);
// ship1.move();
// ship1.stop();

// ship.run(); //looking for nonexisting method => return error;