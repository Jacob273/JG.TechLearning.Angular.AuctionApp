"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var vegetable = 'tomato';
var fruits = ['apples', 'bananas', 'mangoes', 'cherries'];
var vegetable$ = rxjs_1.of(vegetable);
var fruit$ = rxjs_1.from(fruits);
vegetable$.subscribe(function (vege) { console.log(vege); }, function (err) { console.error(err.message); }, function () { console.log('Stream completed !'); });
