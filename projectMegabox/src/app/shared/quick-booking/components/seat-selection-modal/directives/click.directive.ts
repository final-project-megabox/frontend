import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { SeatService } from '../service/seat.service';

@Directive({
  selector: '[ClickSeat]'
})
export class ClickSeatDirective {

  constructor(private el: ElementRef, private renderer: Renderer2, private seatService: SeatService) { }

  @HostListener('click') handle1() {
    // 인원 선택 안했으면 모달
    if(!this.seatService.normal && !this.seatService.youth && !this.seatService.favor) return;
    
    // 클릭시 색상변경
    if (!this.el.nativeElement.style.textDecorationLine) {
      if(this.seatService.totalPeople <= this.seatService.selectSeat.length) return;
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#503396');
      this.renderer.setStyle(this.el.nativeElement, 'textDecorationLine', 'underline');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', null);
      this.renderer.setStyle(this.el.nativeElement, 'textDecorationLine', null);
    }
  }
}
