import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable/*, of*/ } from 'rxjs';

import { AuctionItem } from './auction-item';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  // http://localhost:3000/
  baseURI = environment.baseURL + 'auctions';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(this.baseURI);
    // return of([
    //   { title: 'Hello'} as AuctionItem
    // ]);
  }

  addAuction(auction: AuctionItem): Observable<AuctionItem> {
    return this.httpClient.post<AuctionItem>(this.baseURI, auction);
  }
}
