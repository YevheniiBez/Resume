import { Component, HostListener, NgZone, OnInit } from '@angular/core';
import { TweenLite } from 'gsap';
import { debounceTime, fromEvent, Observable } from 'rxjs';
// @ts-ignore
import { magicMouse } from 'magicmouse.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  top:any;
  left:any;
  expand=false;

  constructor() {}

  ngOnInit(){
    const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(debounceTime(100))
      .subscribe((e)=>{
          console.log(111);
          this.top=(e.pageY - 10)+ "px";
          this.left= (e.pageX - 10)+ "px";
      });

    magicMouse({
      "cursorOuter": "circle-basic",
      "hoverEffect": "circle-move",
      "hoverItemMove": false,
      "defaultCursor": true,
      "outerWidth": 41,
      "outerHeight": 41
    });
  }

  @HostListener('document:click', ['$event'])
  onClick() {
    this.expand=true;
    setTimeout(() => {
      this.expand=false;
    }, 500)
  }

}
