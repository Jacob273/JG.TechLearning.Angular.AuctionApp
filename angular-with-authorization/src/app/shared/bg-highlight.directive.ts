import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBgHighlight]'
})
export class BgHighlightDirective {

  // to pole musi mieć taką nazwę jak selektor dyrektywy
  @Input() appBgHighlight = '';
  @HostBinding('style.backgroundColor') bgColor = '';

  @HostListener('mouseover')
  mouseOver() {
    this.bgColor = this.appBgHighlight || 'yellow';
  }

  @HostListener('mouseout')
  mouseOut() {
    this.bgColor = '';
  }
}
