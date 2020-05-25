class Vehicle {
    constructor(name, hasWheels) {
        this.hasWheels = hasWheels;
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);

    }
};


class Ship extends Vehicle {
    constructor(name, speed) {
        super(name, false); // link to the constructor of the parenting class
        this.speed = speed;
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

const ship1 = new Ship('Agata', 17);
console.log(ship1);
ship1.move();
ship1.stop();

// ship.run(); //looking for nonexisting method => return error;