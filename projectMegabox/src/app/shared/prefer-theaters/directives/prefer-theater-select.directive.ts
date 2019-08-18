import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { PreferTheatersService } from '../services/prefer-theaters.service';

@Directive({
  selector: '[appPreferTheaterSelect]'
})
export class PreferTheaterSelectDirective {

  constructor(private el: ElementRef, private renderer: Renderer2, public preferTheaterService: PreferTheatersService) { }

  @HostListener('change') HandlerChange() {
    this.el.nativeElement.nextElementSibling.value = '영화관선택';

    if(this.el.nativeElement.id === 0) { this.preferTheaterService.theaterOneState = '영화관선택';} 
    if(this.el.nativeElement.id === 1) { this.preferTheaterService.theaterTwoState = '영화관선택';}
    if(this.el.nativeElement.id === 2) { this.preferTheaterService.theaterThreeState = '영화관선택';}
  }
}