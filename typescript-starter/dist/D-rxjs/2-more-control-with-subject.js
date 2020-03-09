"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var numberSubject = new rxjs_1.Subject();
numberSubject.next(1);
// Subscriber
numberSubject.subscribe(function (num) { console.log(num); });
numberSubject.next(2);
