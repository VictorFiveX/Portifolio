import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { KnowledgeComponent } from './Pages/knowledge/knowledge.component';
import { ContactComponent } from './Pages/contact/contact.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [  
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'knowledge', component: KnowledgeComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
