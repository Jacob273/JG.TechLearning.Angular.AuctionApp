import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions-site',
  templateUrl: './promotions-site.component.html',
  styles: []
})
export class PromotionsSiteComponent implements OnInit {

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
