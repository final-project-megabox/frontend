import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreferTheaterSelect]'
})
export class PreferTheaterSelectDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('change') HandlerChange() {
    this.el.nativeElement.nextElementSibling.value = '영화관선택';
  }

}
