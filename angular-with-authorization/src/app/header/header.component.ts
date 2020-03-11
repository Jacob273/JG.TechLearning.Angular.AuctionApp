import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // template: `
  //   HELLO !!! {{subTitle}}
  // `,
  // encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Auction Portal';
  subTitle = 'Portal z aukcjami!';
  addBlue = true;

  myStyle = {
    backgroundColor: 'yellow'
  };

  constructor() { }

  ngOnInit(): void {
    // this.title = 'Hello!';
  }

  handleOnClick() {
    this.addBlue = !this.addBlue;
  }

}
