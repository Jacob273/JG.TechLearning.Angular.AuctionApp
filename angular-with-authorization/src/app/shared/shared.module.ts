import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BgHighlightDirective } from './bg-highlight.directive';


@NgModule({
  declarations: [SearchBarComponent, BgHighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [SearchBarComponent, BgHighlightDirective]
})
export class SharedModule { }
