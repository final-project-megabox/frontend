import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[RateActive]'
})
export class RateActiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') rateHover() {
    this.hoverUrl('http://image2.megabox.co.kr/mop/home/star_big_on.png')
  }

  private hoverUrl(url: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundUrl', url);
  }



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
