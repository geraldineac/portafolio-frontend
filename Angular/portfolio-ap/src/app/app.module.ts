import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutComponent } from './componentes/about/about.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { EducationComponent } from './componentes/education/education.component';
import { JobsComponent } from './componentes/jobs/jobs.component';
import { AbouteditComponent } from './modales/aboutedit/aboutedit.component';
import { EducationeditComponent } from './modales/educationedit/educationedit.component';
import { HeadereditComponent } from './modales/headeredit/headeredit.component';
import { JobseditComponent } from './modales/jobsedit/jobsedit.component';
import { SkillseditComponent } from './modales/skillsedit/skillsedit.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { ProjectseditComponent } from './modales/projectsedit/projectsedit.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    JobsComponent,
    AbouteditComponent,
    EducationeditComponent,
    HeadereditComponent,
    JobseditComponent,
    SkillseditComponent,
    Error404Component,
    HomeComponent,
    ProjectseditComponent,
    ProjectsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
