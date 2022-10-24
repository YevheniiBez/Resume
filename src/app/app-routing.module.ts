import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'my-skills',
    component: MySkillsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
