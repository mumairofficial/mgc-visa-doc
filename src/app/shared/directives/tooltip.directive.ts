import { Directive, ElementRef, Input, Renderer, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements AfterViewInit {
  el: ElementRef;
  @Input() tooltip;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  }

  ngAfterViewInit() {
    this.renderer.setElementAttribute(this.elementRef.nativeElement, 'data-toggle', 'tooltip');
    this.renderer.setElementAttribute(this.elementRef.nativeElement, 'data-title', this.tooltip);
  }
}
