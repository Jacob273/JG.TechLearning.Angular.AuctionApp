import {Subject}  from 'rxjs'

const numberSubject = new Subject<number>();



numberSubject.next(1);

// Subscriber
numberSubject.subscribe(
    (num: number) => {console.log(num)},
)

numberSubject.next(2);
