import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './components/work/work.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LinkComponent } from './components/link/link.component';
import { MousemoveDirective } from './components/mousemove.directive';
import { AnimateitDirective } from './components/animateit.directive';
import { BlogModule } from './components/blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    HomeComponent,
    AboutComponent,
    MySkillsComponent,
    ContactComponent,
    SideBarComponent,
    LinkComponent,
    MousemoveDirective,
    AnimateitDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
