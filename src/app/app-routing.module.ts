import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Welcome page'
  },
  {
    path: 'work',
    component: WorkComponent,
    title: 'My work'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About me'
  },
  {
    path: 'my-skills',
    component: MySkillsComponent,
    title: 'My skills'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact'
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
