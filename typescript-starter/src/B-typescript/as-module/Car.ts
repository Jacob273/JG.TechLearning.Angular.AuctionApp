
export class Car {

    private name: string;

    constructor() {
        this.name = 'My superCar'
    }

    changeCarName(name: string) {
        this.name = name;
    }

    shoutMyName() {
        console.log(this.name)
    }
}
