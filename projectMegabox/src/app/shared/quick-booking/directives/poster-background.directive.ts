import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appPosterBackground]'
})
export class PosterBackgroundDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') handlerPoster() {
    if(this.el.nativeElement.style.backgroundColor) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', null);
        this.renderer.setStyle(this.el.nativeElement.lastChild, 'color', null);
      }
    else {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#198591');
        this.renderer.setStyle(this.el.nativeElement.lastChild, 'color', '#fff');
    }
  }
}
