import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-auction-counter',
  templateUrl: './auction-counter.component.html',
  styleUrls: ['./auction-counter.component.css']
})

// Komponent niezbedny do wyswietlania liczby elementow w koszyku
export class AuctionCounterComponent implements OnInit {

  private cartService: CartService;
  numberOfAuctions  = 0;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit(): void {
    this.cartService.countItems()
    .subscribe( (val) => {
        this.numberOfAuctions = val;
      }
    );
  }

}
