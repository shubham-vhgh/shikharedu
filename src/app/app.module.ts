import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';

const appRoutes:Routes=[
  {path: '',component: DashComponent},
  {path: 'home',component:DashComponent},
  {path: 'aboutUs',component: AboutUsComponent},
  {path: 'Course',component: CourseComponent},
  {path: 'Contact', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    AboutUsComponent,
    CourseComponent,
    ContactComponent,
    SocialmediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
