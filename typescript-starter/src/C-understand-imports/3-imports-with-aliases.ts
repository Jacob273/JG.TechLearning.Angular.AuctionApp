// a co jeśli nasze zmienne lokalne "gryzą się" nazwami z importami?
import { SHOP_NAME as GROCERY_SHOP } from './modules/shopping'


const SHOP_NAME = 'SUPER MARKET'

console.log(SHOP_NAME);
console.log('with a', GROCERY_SHOP);
