
console.log('Hello Types !');

// Podstawowe :
let str: string;
let num: number;
let bool: boolean;

let numArray: number[];
let boolArray: Array<boolean>;

numArray = [1, 2, 3.2];
boolArray = [true];

const moreComplex: Object = {};

let detailedObject: {name: string, age?: number} = {name: 'Katarzyna'};
detailedObject.age = 38;

let anyType: any = 'najpierw-string';

anyType = 123;


// Dodatkowe:

/// Enum
enum Apartment {BIG = 100, MEDIUM = 90, SMALL = 10, LITTLE = 3}

const apart = Apartment.LITTLE;

/// Union type:
type StringOrNumber = string | number;

type ChosenOnes = 'APPLE' | 'GRAPES' | 'MANGO';



