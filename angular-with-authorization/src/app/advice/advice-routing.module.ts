import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AdvicesSiteComponent } from './advices-site/advices-site.component';
import { AdviceDetailComponent } from './advices-site/advice-detail.component';

const routes: Route[] = [
  {path: '', component: AdvicesSiteComponent, children: [
    {path: '', component: AdviceDetailComponent},
    {path: 'article/:articleId', component: AdviceDetailComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviceRoutingModule { }
