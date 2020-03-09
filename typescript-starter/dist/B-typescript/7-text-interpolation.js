"use strict";
function getTemplate(_a) {
    var name = _a.name, price = _a.price, tax = _a.tax;
    return "\n    \n            There is an item on sale: " + name + " !\n            \n            You can buy it now for only $" + (price + tax) + "\n            (tax: " + tax + " included)\n    \n    ";
}
console.log(getTemplate({
    name: 'Smart TV',
    price: 2000,
    tax: 432
}));
