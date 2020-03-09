export const SHOP_NAME = 'Grocery Shop';

export const fruitList = [
    'apples', 'oranges', 'mangoes', 'cherries', 'bananas'
]

export const vegetablesList = [
    'tomatoes', 'potatoes', 'pumpkins'
]

export const buyMethods = {
    buyFruits(amount: number): string[] {
        return fruitList.slice(0, amount);
    },
    buyVeggies(amount: number): string[] {
        return vegetablesList.slice(0, amount);
    }
}
