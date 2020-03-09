export interface MyShop {
    readonly name: string;
    numberOfVegetables: number;
    numberOfFruits: number;
    buy(itemId: number, amount: number): number;
}

