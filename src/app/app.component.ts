import { AfterViewInit, ChangeDetectorRef, Component, HostListener, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TweenLite } from 'gsap';
import { debounceTime, fromEvent, Observable } from 'rxjs';
// @ts-ignore
import { magicMouse } from 'magicmouse.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(){
    magicMouse({
      "cursorOuter": "circle-basic",
      "hoverEffect": "circle-move",
      "hoverItemMove": false,
      "defaultCursor": true,
      "outerWidth": 30,
      "outerHeight": 30
    });
  }
}
