import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviceRoutingModule } from './advice-routing.module';
import { AdvicesSiteComponent } from './advices-site/advices-site.component';
import { AdviceDetailComponent } from './advice-detail/advice-detail.component';


@NgModule({
  declarations: [AdvicesSiteComponent, AdviceDetailComponent],
  imports: [
    CommonModule,
    AdviceRoutingModule
  ]
})
export class AdviceModule { }
