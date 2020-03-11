import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgHighlightDirective } from './bg-highlight.directive';



@NgModule({
  declarations: [BgHighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [BgHighlightDirective]
})
export class SharedModule { }
