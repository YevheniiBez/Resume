import { AfterViewInit, ChangeDetectorRef, Component, HostListener, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { debounceTime, filter, fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{
  isHome = false;
  constructor(private _router: Router) {}

  ngOnInit() {
    this._router.events.
      pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.isHome = e.url === '/home';
      });
  }
}
