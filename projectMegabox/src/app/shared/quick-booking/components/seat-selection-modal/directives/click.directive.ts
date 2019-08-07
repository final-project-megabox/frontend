import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[ClickSeat]'
})
export class ClickSeatDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') handle1() {
    if (!this.el.nativeElement.style.textDecorationLine) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#503396');
      this.renderer.setStyle(this.el.nativeElement, 'textDecorationLine', 'underline');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', null);
      this.renderer.setStyle(this.el.nativeElement, 'textDecorationLine', null);
    }
  }
}
