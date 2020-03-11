import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgHighlight]'
})
export class BgHighlightDirective {

  @HostBinding('style.backgroundColor') bgColor = '';

  constructor() { }

  @HostListener('mouseover')
  mouseOver() {
    this.bgColor = 'lightgray';
  }

  @HostListener('mouseout')
  mouseOut() {
    this.bgColor = '';
  }

}
