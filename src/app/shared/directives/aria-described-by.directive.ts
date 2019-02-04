import { Directive, AfterViewInit, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
  selector: '[describedBy]'
})
export class AriaDescribedByDirective implements AfterViewInit {
  @Input() describedBy = '';

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setAttribute(this.elem.nativeElement, 'aria-describedby', this.describedBy);
  }
}
