

function getTemplate( { name, price, tax } : { name: string, price: number, tax: number} ): string {
    return `
    
            There is an item on sale: ${name} !
            
            You can buy it now for only $${price + tax}
            (tax: ${tax} included)
    
    `
}

console.log(getTemplate({
    name: 'Smart TV',
    price: 2000,
    tax: 432
}));
