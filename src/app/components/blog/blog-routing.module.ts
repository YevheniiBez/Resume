import { PwaComponent } from './pwa/pwa.component';
import { TestingComponent } from './testing/testing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { BlogComponent } from './blog.component';
import { UniversalComponent } from './universal/universal.component';
import { AgileComponent } from './agile/agile.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    title: 'Blog',
  },
      {
        path: 'blog/accessibility',
        component: AccessibilityComponent,
        title: 'Blog - Accessibility'
      },
      {
        path: 'blog/universal',
        component: UniversalComponent,
        title: 'Blog - Angular Universal'
      },
  {
    path: 'blog/agile',
    component: AgileComponent,
    title: 'Blog - Agile'
  },
  {
    path: 'blog/testing',
    component: TestingComponent,
    title: 'Blog - Testing'
  },
  {
    path: 'blog/pwa',
    component: PwaComponent,
    title: 'Blog - PWA'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
