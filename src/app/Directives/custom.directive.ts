import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})  
export class CustomDirective {

  constructor(private myElem:ElementRef) {
    console.log(myElem);
    
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.myElem.nativeElement.style.transform = 'scale(1,1.2)';

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.myElem.nativeElement.style.transform = 'scale(1,1)';
  }
}
