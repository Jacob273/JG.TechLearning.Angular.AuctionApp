

interface Cat {
    name: string;
    height: number;
    alwaysLandsOn4Feet?: boolean;
}

let myCat: Cat;

// #1 Popraw:
// myCat = {};

// #2 Interface w TS nie tylko może być zaimplementowany do klasy.
//    pokazuje również model danych I nie zostawia po sobie śladu w JS
