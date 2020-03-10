import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';
import { PromotionsSiteComponent } from './promotions-site/promotions-site.component';


const routes: Routes = [
  {path: 'auctions', component: AuctionsSiteComponent},
  {path: 'promotions', component: PromotionsSiteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
