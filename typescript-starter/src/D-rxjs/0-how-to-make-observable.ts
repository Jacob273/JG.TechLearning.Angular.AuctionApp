import { Observable, Subscriber } from 'rxjs';

// PROVIDER:
const observable = new Observable<number>((subscriber: Subscriber<number>) => {
    subscriber.next(1);
    subscriber.next(2);
    /*
    setTimeout(() => {
        subscriber.next(3);
        subscriber.complete();
    }, 1000);
    */
});

// CONSUMER:
observable.subscribe((num :number) => {
    console.log(num)
})


// Podobnie jak przy PROMISE:
// PROVIDER:
const promise = new Promise<number>((resolve) => {
    resolve(1)
});

// CONSUMER:
promise
    .then((num :number) => {
        console.log(num)
    })

