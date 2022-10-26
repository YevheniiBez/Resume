import { Directive, ElementRef, HostListener } from '@angular/core';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appAnimateit]'
})
export class AnimateitDirective {

  subscription: Subscription;
  constructor(private _elementRef: ElementRef) { }
  animateit (e: any) {

    const span = this._elementRef.nativeElement;
    const { offsetX: x, offsetY: y } = e;
    const width = span.offsetWidth;
    const height = span.offsetHeight;

     const move = 25;
     const xMove = x / width * (move * 2) - move;
     const yMove = y / height * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;
  };

  @HostListener('mouseover', ['$event'])
  onMouseMove(e: any) {
    this.animateit(e);
    this.subscription = fromEvent<MouseEvent>(document, 'mousemove')
      .subscribe((e)=>{
        this.animateit(e);
        console.log(111)
      });
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut(e: any) {
    const span = this._elementRef.nativeElement;
    span.style.transform = '';
    this.subscription.unsubscribe();
  }
}
