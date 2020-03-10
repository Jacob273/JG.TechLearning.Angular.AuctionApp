import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions-site',
  templateUrl: './promotions-site.component.html',
  styleUrls: ['./promotions-site.component.css']
})
export class PromotionsSiteComponent implements OnInit {

  todaysDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
