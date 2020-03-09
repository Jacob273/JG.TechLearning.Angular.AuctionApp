import { SHOP_NAME, buyMethods, vegetablesList } from './modules/shopping'
// można również import wszystkiego z namespace:
import * as fromShopping from './modules/shopping'

console.log('Service:', 'Welcome to the', SHOP_NAME);
console.log('Customer:', 'Show me what you got?');
console.log('Service:')
console.log('Vegetables: ', vegetablesList);
console.log('Fruits: ', fromShopping.fruitList);
console.log('Customer:', 'I want to buy 3 types of fruits');
console.log(buyMethods.buyFruits(3));
