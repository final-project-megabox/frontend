import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[ChoiceEmail]'
})
export class ChoiceEmailDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('focus') handlerFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'hsl(205, 40%, 40%)');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
  }

  @HostListener('blur') handlerBlur() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', null);
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
  }
}
