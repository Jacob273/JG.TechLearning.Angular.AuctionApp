import { Component, OnInit, Input } from '@angular/core';
import { AuctionItem } from '../auction-item';


@Component({
  selector: 'app-auction-item-card',
  templateUrl: './auction-item-card.component.html',
  styles: []
})
export class AuctionItemCardComponent implements OnInit {

@Input()  auction: AuctionItem;


  constructor() { }

  ngOnInit(): void {
  }

}
