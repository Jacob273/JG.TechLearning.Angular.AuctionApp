"use strict";
var V8Car = /** @class */ (function () {
    function V8Car(name) {
        if (name === void 0) { name = 'Audi A6'; }
        this.engine = 'V8';
        this.name = name;
    }
    // Idiom w TypeScript:
    // constructor(public name = 'Audi A6') {}
    V8Car.prototype.makeSomeNoise = function () {
        console.log("Wroom " + this.engine + ", wroom - the " + this.name + " is driving here");
    };
    return V8Car;
}());
var v8Car = new V8Car();
v8Car.name = 'BMW 6 Series';
// v8Car.engine = 'Do not touch my private things';
v8Car.makeSomeNoise();
// #1 zrób z klasy V8Car oddzielny moduł
