"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Importujemy interfejs MyShop tylko po to żeby pilnować się w momencie
    inicjowania nowego sklepu
*/
var myNewShop = {
    name: 'SUPER NEW GROCERY SHOP',
    numberOfFruits: 0,
    numberOfVegetables: 0,
    buy: function (itemId, amount) {
        var calculatePrice = 0;
        calculatePrice += 10;
        return calculatePrice;
    }
};
