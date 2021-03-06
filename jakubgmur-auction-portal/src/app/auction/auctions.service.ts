import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  private httpClient: HttpClient;
  private baseURL = environment.baseURL;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(`${this.baseURL}auctions`);
  }

  add(auction: AuctionItem)
   : Observable<AuctionItem> {
    return this.httpClient.post<AuctionItem>(`${this.baseURL}auctions`, auction);
  }
}
