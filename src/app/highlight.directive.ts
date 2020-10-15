import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('highlightColor') sd: string='yellow';
  constructor(private el:ElementRef) {

  }
  @HostListener('click') onClick(){
    this.el.nativeElement.style.background = this.sd;
    
  }
}
