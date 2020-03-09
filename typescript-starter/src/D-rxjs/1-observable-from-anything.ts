import {of, from}  from 'rxjs'

const vegetable = 'tomato';
const fruits = ['apples', 'bananas', 'mangoes', 'cherries'];

const vegetable$ = of(vegetable);
const fruit$ = from(fruits);

vegetable$.subscribe(
    (vege: string) => {console.log(vege)},
    (err: Error) => {console.error(err.message)},
    () => {console.log('Stream completed !')}
)

