"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shopping_1 = require("./modules/shopping");
// można również import wszystkiego z namespace:
var fromShopping = __importStar(require("./modules/shopping"));
console.log('Service:', 'Welcome to the', shopping_1.SHOP_NAME);
console.log('Customer:', 'Show me what you got?');
console.log('Service:');
console.log('Vegetables: ', shopping_1.vegetablesList);
console.log('Fruits: ', fromShopping.fruitList);
console.log('Customer:', 'I want to buy 3 types of fruits');
console.log(shopping_1.buyMethods.buyFruits(3));
