import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreferTheaterSelect]'
})
export class PreferTheaterSelectDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('change') HandlerChange() {
    this.el.nativeElement.nextElementSibling.value = '영화관선택';
    // this.el.nativeElement.nextElementSibling.textContent = '영화관선택';
    // this.el.nativeElement.nextElementSibling.innerHTML = '영화관선택';
    console.log('change 먹엇당');
    
    // console.log('value',this.el.nativeElement.nextElementSibling.value);
    // console.log('textContent',this.el.nativeElement.nextElementSibling.textContent);
    // console.log('innerHTML',this.el.nativeElement.nextElementSibling.innerHTML);
    // console.log('innerText', this.el.nativeElement.nextElementSibling.innerText);
    // console.log(this.el.nativeElement.nextElementSibling);
    // this.renderer.setValue(this.el.nativeElement.nextElementSibling, '영화관선택');
    // this.renderer.createText('영화관선택');
  }

}
