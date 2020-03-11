import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-auction-site',
  templateUrl: './add-auction-site.component.html',
  styleUrls: ['./add-auction-site.component.css'],
  styles: [`

  `]
})
export class AddAuctionSiteComponent implements OnInit {

  imgId = 1;

  constructor() { }

  ngOnInit(): void {
  }

  handleFormSubmit(form: NgForm) {
    console.log(form);
  }

}
