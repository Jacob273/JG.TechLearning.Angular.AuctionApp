"use strict";
function showMyType(arg) {
    return typeof arg;
}
console.log(showMyType('hello world'));
console.log(showMyType(222));
console.log(showMyType(true));
console.log(showMyType({ a: 'a', b: 'b' }));
