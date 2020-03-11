import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvicesSiteComponent } from './advices-site/advices-site.component';


const routes: Routes = [
  {path: '', component: AdvicesSiteComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdviceRoutingModule { }
