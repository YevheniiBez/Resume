import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMousemove]'
})
export class MousemoveDirective {

  constructor(private _elementRef: ElementRef) { }

  editCursor(e: any) {
    const { clientX: x, clientY: y } = e;
    this._elementRef.nativeElement.style.left = x + 'px';
    this._elementRef.nativeElement.style.top = y + 'px';
  };

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    this.editCursor(e);
  }
}
