"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var numberSubject = new rxjs_1.BehaviorSubject(100);
var mappedNumber$ = numberSubject.pipe(operators_1.map(function (num) { return num * 2; }));
// Subscriber
mappedNumber$.subscribe(function (num) { console.log(num); });
numberSubject.next(2);
