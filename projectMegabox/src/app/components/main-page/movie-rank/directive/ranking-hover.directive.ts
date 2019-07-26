import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRankingHover]'
})
export class RankingHoverDirective {

  constructor(private host: ElementRef) { }

  @HostListener('mouseenter') onmouseenter() {
    this.rankingHover('block');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.rankingHover('none');
  }

  private rankingHover(display: string) {
    this.host.nativeElement.style.display = display;
  }
  
  // @HostListener('window:mousemove') mouseenter() {
    // this.renderer.setStyle(this.host.nativeElement, 'display', this.mouseenter ? 'block' : 'none')
    // let rankingHover = this.el.nativeElement.queryselector('.rank-poster-hover-0')
    // this.renderer.setStyle(rankingHover, 'display', 'block');
    // this.renderer.setStyle(this.host.nativeElement, 'display', MouseEvent ? 'block' : 'none');
    // this.rankingHover('block');
  // }
}