import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { CardProjectsComponent } from './Components/card-projects/card-projects.component';
import { KnowledgeComponent } from './Pages/knowledge/knowledge.component';
import { CardKnowledgeComponent } from './Components/card-knowledge/card-knowledge.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { BackToTopComponent } from './Components/back-to-top/back-to-top.component';
import { NavigationComponent } from './Components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    CardProjectsComponent,
    KnowledgeComponent,
    CardKnowledgeComponent,
    ContactComponent,
    BackToTopComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
