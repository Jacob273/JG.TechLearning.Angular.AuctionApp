import { Component, OnInit } from '@angular/core';
import { AuctionItem } from '../auction-item';
import { AuctionsService } from '../auctions.service';

@Component({
  selector: 'app-auctions-site',
  templateUrl: './auctions-site.component.html',
  styles: []
})
export class AuctionsSiteComponent implements OnInit {

    auctions: AuctionItem[];
    private auctionService: AuctionsService;

constructor(auctionService: AuctionsService) { 
  this.auctionService = auctionService;
}

  ngOnInit(): void {
    this.auctions = this.auctionService.getAll();
  }

}
