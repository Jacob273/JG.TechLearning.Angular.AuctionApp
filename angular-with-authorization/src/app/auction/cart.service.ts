import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cartItems: AuctionItem[] = [];
  private cartItem$ = new BehaviorSubject<AuctionItem[]>([]);
  private itemsCount$ = this.cartItem$.pipe(map((auctions: AuctionItem[]) => auctions.length));

  // |-----([1])------([1,2])--------([1,2,3])---([2,3])
  //       map(arr => arr.lenght)
  //        |           |
  //         \           \
  // |--------1-----------2---------------3-----------2---->

  constructor() {}

  addItem(auction: AuctionItem) {
    const auctions: AuctionItem[] = this.cartItem$.getValue();
    // auctions.push(auction);
    this.cartItem$.next([...auctions, auction]);
    // przykład logiki dodatkowej:
    // if (auction.id === 1) {
    //   const promoAuction = {title: 'Promocja !'} as AuctionItem;
    //   this.cartItem$.next([...this.cartItem$.getValue(), promoAuction]);
    // }
  }

  // BARDZO ŹLE bo łamiemy "jedno źrodło prawdy"
  // getItems(): BehaviorSubject<AuctionItem[]>  {
  //   return this.cartItem$;
  // }

  getItems(): Observable<AuctionItem[]>  {
    return this.cartItem$.asObservable();
  }

  getItemCount(): Observable<number> {
    return this.itemsCount$;
  }

}
