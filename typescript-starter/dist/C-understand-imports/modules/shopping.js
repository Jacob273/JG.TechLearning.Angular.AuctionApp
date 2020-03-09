"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHOP_NAME = 'Grocery Shop';
exports.fruitList = [
    'apples', 'oranges', 'mangoes', 'cherries', 'bananas'
];
exports.vegetablesList = [
    'tomatoes', 'potatoes', 'pumpkins'
];
exports.buyMethods = {
    buyFruits: function (amount) {
        return exports.fruitList.slice(0, amount);
    },
    buyVeggies: function (amount) {
        return exports.vegetablesList.slice(0, amount);
    }
};
