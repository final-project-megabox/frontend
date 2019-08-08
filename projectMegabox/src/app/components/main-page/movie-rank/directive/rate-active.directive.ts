import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[RateActive]'
})
export class RateActiveDirective {

  // constructor(private el: ElementRef, private renderer: Renderer2) { }

  // @HostListener('mouseenter') rateHover() {
  //   this.hoverUrl('http://image2.megabox.co.kr/mop/home/star_big_on.png')
  // }

  // private hoverUrl(url: string) {
  //   this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', url);
  // }

  // constructor(private el: ElementRef) {
  // }

  // @Input('RateActive')

  // hoverOut = 'http://image2.megabox.co.kr/mop/home/star_big_off.png';
  // hover = 'http://image2.megabox.co.kr/mop/home/star_big_on.png';

  // ngAfterViewInit() {
  //   this.el.nativeElement.style.backgroundImage = 'url('+ 'http://image2.megabox.co.kr/mop/home/star_big_off.png' + ')';
  // }


  // constructor(private el: ElementRef) {
  // }

  // @Input('RateActive') RateActiveDirective: string;

  // ngAfterViewInit() {
  //   this.el.nativeElement.style.backgroundImage = 'url('+ this.RateActiveDirective + ')';
  // }



//   @Directive({
//     selector: '[background-image]'
// })
// export class BackgroundImage {
//     private el: HTMLElement;

//     constructor(el: ElementRef) {
//         this.el = el.nativeElement;
//     }

//     @Input('background-image') backgroundImage: string;

//     ngAfterViewInit() {
//         this.el.style.backgroundImage = 'url(' + this.backgroundImage + ')';
//     }
 
// }

}
