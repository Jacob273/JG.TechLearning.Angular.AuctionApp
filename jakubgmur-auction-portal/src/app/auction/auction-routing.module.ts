import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';


const routes: Routes = [
  {path: 'auctions', component: AuctionsSiteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
