import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MountConfig } from 'cypress/angular';

describe('AppComponent', () => {
  const routerMock = {
    events: of({url:'/home'} as NavigationEnd)
  };
  const config: MountConfig<AppComponent> = {
    imports: [RouterModule], providers: [{provide: Router, useValue: routerMock}]
  }
  it('mounts', () => {
    cy.mount(AppComponent, config).then((component)=>{
      console.log(component, 'component');
      component.component.isHome = true;
      component.fixture.detectChanges();
    });
    cy.getBySel('Home-Cursor-Div').should('have.class', 'cursor');
  })
})
