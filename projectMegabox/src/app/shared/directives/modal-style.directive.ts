import { Directive, Renderer2, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appModalStyle]'
})
export class ModalStyleDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {
    console.log('적용');
    if (el.nativeElement.className === 'quick-booking' || el.nativeElement.className === 'movie-modal') {
      renderer.setStyle(el.nativeElement, 'overflowY', 'scroll');
      renderer.setStyle(document.body, 'overflowY', 'hidden');
    }

  }

  @Output() appModalStyle = new EventEmitter();

  @HostListener('click', ['$event.target'])
  handler1(className: HTMLElement) {
    if(className.className === 'modal-close') {
      console.log('버튼클릭')
      this.renderer.setStyle(this.el.nativeElement, 'overflowY', null);
      this.renderer.setStyle(document.body, 'overflowY', null);
    }
    if(className.parentElement.className === 'close') {
      console.log('버튼클릭')
      this.renderer.setStyle(this.el.nativeElement, 'overflowY', null);
      this.renderer.setStyle(document.body, 'overflowY', null);
    }
  }
}
