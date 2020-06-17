class Sportsman {
    constructor(name) {
        this.name = name;
    };

    run() {
        console.log(`${this.name} is running`);
    };

};


class Swimmer extends Sportsman {
    constructor(name, swimmingStyle) {
        super(name),
            this.swimmingStyle = swimmingStyle
    }

    swim() {
        console.log(`${this.name} is swimming ${this.swimmingStyle}`)
    }

}

const s = new Swimmer('Tom', 'breaststroke');
s.swim();