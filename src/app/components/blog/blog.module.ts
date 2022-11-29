import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { RouterModule } from '@angular/router';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { UniversalComponent } from './universal/universal.component';
import { AgileComponent } from './agile/agile.component';
import { TestingComponent } from './testing/testing.component';
import { PwaComponent } from './pwa/pwa.component';
import { OwaspComponent } from './owasp/owasp.component';
import { HttpComponent } from './http/http.component';



@NgModule({
  declarations: [BlogComponent, AccessibilityComponent, UniversalComponent, AgileComponent, TestingComponent, PwaComponent, OwaspComponent, HttpComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RouterModule,
  ]
})
export class BlogModule { }
