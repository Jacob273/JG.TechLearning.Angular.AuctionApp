import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvicesSiteComponent } from './advices-site/advices-site.component';
import { AdviceDetailComponent } from './advice-detail/advice-detail.component';


const routes: Routes = [
  { path: '', component: AdvicesSiteComponent,
  children: [
      { path: '', component: AdviceDetailComponent},
      { path: 'article/:id', component: AdviceDetailComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdviceRoutingModule { }
