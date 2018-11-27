import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements AfterViewInit {
  el: ElementRef;
  @Input() tooltip;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'data-toggle', 'tooltip');
    this.renderer.setAttribute(this.elementRef.nativeElement, 'data-title', this.tooltip);
  }
}
