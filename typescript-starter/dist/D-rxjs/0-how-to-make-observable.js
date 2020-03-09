"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// PROVIDER:
var observable = new rxjs_1.Observable(function (subscriber) {
    subscriber.next(1);
    subscriber.next(2);
    /*
    setTimeout(() => {
        subscriber.next(3);
        subscriber.complete();
    }, 1000);
    */
});
// CONSUMER:
observable.subscribe(function (num) {
    console.log(num);
});
// Podobnie jak przy PROMISE:
// PROVIDER:
var promise = new Promise(function (resolve) {
    resolve(1);
});
// CONSUMER:
promise
    .then(function (num) {
    console.log(num);
});
