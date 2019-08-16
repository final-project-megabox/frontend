import { Directive, Renderer2, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appModalStyle]'
})
export class ModalStyleDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {
    if (el.nativeElement.className === 'quick-booking' || el.nativeElement.className === 'movie-modal') {
      renderer.setStyle(el.nativeElement, 'overflowY', 'scroll');
      renderer.setStyle(document.body, 'overflowY', 'hidden');
    }

  }

  @Output() appModalStyle = new EventEmitter();

  @HostListener('click', ['$event.target'])
  handler1(className: HTMLElement) {
    if(className.className === 'modal-close') {
      this.renderer.setStyle(this.el.nativeElement, 'overflowY', null);
      this.renderer.setStyle(document.body, 'overflowY', null);
    }
    if(className.className === 'close') {
      this.renderer.setStyle(this.el.nativeElement, 'overflowY', null);
      this.renderer.setStyle(document.body, 'overflowY', null);
    }
  }
}
