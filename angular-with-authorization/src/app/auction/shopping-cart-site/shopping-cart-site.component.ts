import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { AuctionItem } from '../auction-item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart-site',
  templateUrl: './shopping-cart-site.component.html',
  styles: []
})
export class ShoppingCartSiteComponent implements OnInit, OnDestroy {

  cartItems: AuctionItem[] = [];
  cartSub: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSub = this.cartService.getItems()
      .subscribe((items: AuctionItem[]) => {
        this.cartItems = items;
      });
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }
}
