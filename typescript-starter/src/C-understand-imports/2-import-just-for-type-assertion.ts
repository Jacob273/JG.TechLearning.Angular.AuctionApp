import { MyShop } from './modules/MyShop'

/*
    Importujemy interfejs MyShop tylko po to żeby pilnować się w momencie
    inicjowania nowego sklepu
*/
const myNewShop: MyShop = {
    name: 'SUPER NEW GROCERY SHOP',
    numberOfFruits: 0,
    numberOfVegetables: 0,
    buy(itemId: number, amount: number): number {
        let calculatePrice = 0;
        calculatePrice += 10;
        return calculatePrice;
    }
}
