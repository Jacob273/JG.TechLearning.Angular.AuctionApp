import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'auctions', pathMatch: 'full'},
  // Lazy loading for webpack bundler:
  {path: 'advices', loadChildren: () => import('./advice/advice.module').then(m => m.AdviceModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
