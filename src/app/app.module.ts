import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { JavaComponent } from './java/java.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { PythonComponent } from './python/python.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CoursesComponent,
    ServicesComponent,
    AboutComponent,
    PagenotfoundComponent,
    JavaComponent,
    AngularComponent,
    ReactComponent,
    NodejsComponent,
    PythonComponent,
    CoursedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
