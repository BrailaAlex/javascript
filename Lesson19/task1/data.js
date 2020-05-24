const bicycle = {
    name: 'kite',
    ride() {
        console.log(`${this.name} riding`);
    },
    stop() {
        console.log(`${this.name} stopped`);

    }
};
// vehicle and ship

const vehicle = {
    name: 'BMW',
    move() {
        console.log(`${this.name} moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);

    },
    __proto__: bicycle,
};


const ship = {
    name: 'Argo',
    hasWheels: false,
    liftAnchorDown() {
        console.log('Lower the anchor');
    },
    liftAnchorUp() {
        console.log('Lift the anchor');
    },
    __proto__: vehicle // vehicle now is a prototype for obj ship
        //ship can now use parental methods from vehicle
};

// Object.setPrototypeOf(ship, vehicle);

ship.ride();
vehicle.move();
console.log(ship);
// ship.run(); //looking for nonexisting method => return error;