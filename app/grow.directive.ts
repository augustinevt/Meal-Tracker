import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[mwGrow]',
  host: {
    '(click)': 'growDiv'
  }
})
export class GrowDirective {
  constructor(private el: ElementRef, private renderer: Renderer ){}
  growDiv(){
    // this.renderer.setElementClass(this.el.nativeElement, '.col-sm-12', false);
    // this.renderer.setElementClass(this.el.nativeElement, '.big-meal', false);
  }
}
