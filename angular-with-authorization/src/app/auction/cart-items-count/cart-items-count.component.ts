import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-items-count',
  template: `
    <div> Masz już {{countItem$ | async}} elementów w koszyku</div>
  `,
  styles: []
})
export class CartItemsCountComponent implements OnInit {

  countItem$: Observable<number> = this.cartService.getItemCount();

  // constructor(public cartService: CartService) { }
   constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.countItem$ = this.cartService.getItemCount();
  }

}
