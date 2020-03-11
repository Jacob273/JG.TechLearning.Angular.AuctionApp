import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { BehaviorSubject, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // BehaviorSubject(HotStream) zapamietuje ostatnia zapamietana wartosc/stan
  private auctions$ = new BehaviorSubject<AuctionItem[]>([
    {title: 'Hello koszyk'} as AuctionItem
  ]);

  constructor() { }

  addItem(auction: AuctionItem) {
      // nie ma mozliwosci na race condition (javascript dziala na 1 watku)
      const auctions = this.auctions$.getValue(); // pobranie ostatniego stanu
      auctions.push(auction);
      this.auctions$.next(auctions);
  }

  getItems(): BehaviorSubject<AuctionItem[]> {
    return this.auctions$;
  }

  countItems(): Observable<number> {
    return of(0);
  }
}
