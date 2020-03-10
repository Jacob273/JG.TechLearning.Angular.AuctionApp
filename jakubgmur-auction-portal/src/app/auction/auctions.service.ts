import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>('http://localhost:3000/auctions');
  }
}
