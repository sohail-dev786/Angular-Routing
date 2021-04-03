import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AngularComponent } from './angular/angular.component';
import { ContactComponent } from './contact/contact.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { JavaComponent } from './java/java.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PythonComponent } from './python/python.component';
import { ReactComponent } from './react/react.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'services',component:ServicesComponent},
{path:'contact',component:ContactComponent},
{path:'courseDetail/:cid',component:CoursedetailsComponent},

{path:'courses',component:CoursesComponent,
children:[
{path:'java',component:JavaComponent},
{path:'angular',component:AngularComponent},
{path:'python',component:PythonComponent},
{path:'react',component:ReactComponent},
{path:'nodejs',component:NodejsComponent},
]},

{path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
