import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
import { CalendarService } from '../service/calendar.service';
import { MainViewComponent } from '../components/main-view/main-view.component';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective {

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2, 
    private calendarService: CalendarService,
    private mainView: MainViewComponent,
  ) { }

  // @Input() className: string;
  // // @Input() ulElem: ElementRef;

  // @HostListener('click') handleClick() {
  //   console.log(this.className, this.ulElem)
  //   if(this.className === 'next-time  ') {
  //     this.renderer.setStyle(el.nativeElement, 'transform', `translateX(${calendarService.dayTableX}px)`);
  //   }
  
  // if(el.nativeElement.classList.contains('time-carousel')) {
  //   console.log('시간캐러셀')
  //   renderer.setStyle(el.nativeElement, 'transform', `translateX(${mainView.timeTableX}px)`);
  // }

    // this.carousel(this.elem);
  // }

  // @HostListener('click')
  // if(el.nativeElement.classList.contains('day-carousel')) {
  //   renderer.setStyle(el.nativeElement, 'transform', `translateX(${calendarService.dayTableX}px)`);
  // }
  
  // if(el.nativeElement.classList.contains('time-carousel')) {
  //   console.log('시간캐러셀')
  //   renderer.setStyle(el.nativeElement, 'transform', `translateX(${mainView.timeTableX}px)`);
  // }


  // private carousel(elem: ElementRef) {
    // this.renderer.setStyle(elem.nativeElement, 'transform', `translateX(${calendarService.dayTableX}px)`);

    // console.log(elem);
    // if(elem.nativeElement.classList.contains('day-carousel')) {
    //   // renderer.setStyle(el.nativeElement, 'transform', `translateX(${calendarService.dayTableX}px)`);
    // }
    
    // if(elem.nativeElement.classList.contains('time-carousel')) {
    //   console.log('time');
    //   // renderer.setStyle(el.nativeElement, 'transform', `translateX(${mainView.timeTableX}px)`);
    // }
  // }
}
