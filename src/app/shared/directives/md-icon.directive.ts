import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from "@angular/core";

@Directive({
  selector: '[mdIcon]'
})
export class MdIconDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'material-icons')
  }
}
