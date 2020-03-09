import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  title = 'JG Auction Portal';
  onHoverTitle = 'Auction-Portal';

  constructor() { }

  ngOnInit(): void {

setTimeout(() => {this.onHoverTitle = 'New-Auction-Portal-Subtitle'}, 2000);

  }

changeTitle(ev : MouseEvent)
{
  this.title += ":0101:";
  console.log(ev);
}


}
