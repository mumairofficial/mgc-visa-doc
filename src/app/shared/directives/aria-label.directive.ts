import { Directive, AfterViewInit, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
  selector: '[ariaLabel]'
})
export class AriaLabelDirective implements AfterViewInit {
  @Input() ariaLabel = '';

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setAttribute(this.elem.nativeElement, 'aria-label', this.ariaLabel);
  }
}
