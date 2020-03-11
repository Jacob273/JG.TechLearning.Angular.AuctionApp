import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { BehaviorSubject, of, Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // BehaviorSubject(HotStream) zapamietuje ostatnia zapamietana wartosc/stan
  private auctions$ = new BehaviorSubject<AuctionItem[]>([]);

  constructor() { }

  addItem(auction: AuctionItem) {
      // nie ma mozliwosci na race condition (javascript dziala na 1 watku)
      const auctions = this.auctions$.getValue(); // pobranie ostatniego stanu
      auctions.push(auction);
      this.auctions$.next(auctions);
  }

  getItems(): Observable<AuctionItem[]> {
    return this.auctions$.asObservable();
  }

  countItems(): Observable<number> {
    // ten map bedzie wykonany dla kazdej nowej wartosci
    return this.auctions$
               .pipe(map((auctions: AuctionItem[]) => auctions.length));
  }
}
