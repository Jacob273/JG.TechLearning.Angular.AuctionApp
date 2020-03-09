class V8Car {

    private engine = 'V8';
    public name: string;

    constructor(name = 'Audi A6') {
        this.name = name;
    }

    // Idiom w TypeScript:
    // constructor(public name = 'Audi A6') {}

    makeSomeNoise() {
        console.log(`Wroom ${this.engine}, wroom - the ${this.name} is driving here`);
    }
}

const v8Car = new V8Car();

v8Car.name = 'BMW 6 Series';
// v8Car.engine = 'Do not touch my private things';
v8Car.makeSomeNoise();

// #1 zrób z klasy V8Car oddzielny moduł
