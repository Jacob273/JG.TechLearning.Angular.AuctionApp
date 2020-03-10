import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {


  private baseURL = environment.baseURL;

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(`${this.baseURL}auctions`);
  }
}
