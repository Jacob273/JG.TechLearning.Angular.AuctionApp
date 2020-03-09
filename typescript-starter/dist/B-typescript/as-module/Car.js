"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car() {
        this.name = 'My superCar';
    }
    Car.prototype.changeCarName = function (name) {
        this.name = name;
    };
    Car.prototype.shoutMyName = function () {
        console.log(this.name);
    };
    return Car;
}());
exports.Car = Car;
