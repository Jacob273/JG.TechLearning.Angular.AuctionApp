import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  title = 'JG Auction Portal';
  subTitle = 'Auction-Portal';

  constructor() { }

  ngOnInit(): void {

setTimeout(() => {this.subTitle = 'New-Auction-Portal-Subtitle'}, 2000);

  }

}
