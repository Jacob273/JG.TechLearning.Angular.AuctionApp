import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuctionItem } from '../auction-item';
import { AuctionsService } from './../auctions.service';

@Component({
  selector: 'app-add-auction-site',
  templateUrl: './add-auction-site.component.html',
  styleUrls: ['./add-auction-site.component.css'],
  styles: [`
      .ng-touched.ng-invalid{
        border-color: darkred;
      }
  `]
})
export class AddAuctionSiteComponent implements OnInit {

  private auctionService : AuctionsService;
  imgId = 1;

  constructor(auctionService: AuctionsService) { 
    this.auctionService = auctionService;
  }

  ngOnInit(): void {
  }

  handleFormSubmit(form: NgForm) {
    console.log(form);
    const auction = form.value as AuctionItem;
    auction.imgUrl = 'https://i.picsum.photos/id/' + this.imgId + '/200/200.jpg';
    this.auctionService
        .add(auction)
        .subscribe((e) => {
          console.log(e);
        }, (error: Error) => {
            console.log('Jest Blad');
        }, () => {
            console.log('Jest Ok.');
        });
  }

}
