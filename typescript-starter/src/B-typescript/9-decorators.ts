
function Sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@Sealed
class Messenger {

    static staticMember: string;

    constructor(public message: string) {}


    giveMeTheMessage() {
        return 'Hello, ' + this.message;
    }
}

const deliver = new Messenger('this is your message !');

console.log(deliver.giveMeTheMessage());

//Messenger.staticMember = 'Static member';

console.log(deliver)

console.log(Messenger.staticMember)

// #1 Zobacz jak zachowa się obiekt jeśli klasa nie będzie miała dekotatora @Sealed

