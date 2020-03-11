import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../auctions.service';
import { AuctionItem } from '../auction-item';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-auction-site',
  templateUrl: './add-auction-site.component.html',
  styles: [`
    .ng-invalid.ng-touched {
      border-color: darkred;
    }
  `]
})
export class AddAuctionSiteComponent implements OnInit {

  imgId = 1;
  addAuctionErrorMessage = '';

  constructor(private auctionStervice: AuctionsService) { }

  ngOnInit(): void {}

  handleSubmitAuction(form: NgForm) {
    // if (form.invalid) {
    //   return;
    // }
    const auction: AuctionItem = form.value as AuctionItem;
    auction.imgUrl = `https://picsum.photos/id/${this.imgId}/200/200`;

    console.log(form);
    console.log(auction);
    this.addAuctionErrorMessage = '';
    this.auctionStervice.addAuction(auction).subscribe(() => {
      form.reset();
      this.imgId = 1;
    }, (error: HttpErrorResponse) => {
      this.addAuctionErrorMessage = error.message;
    });
  }
}
