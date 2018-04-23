import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http'

//custom components 
import { MainComponent } from '../app/main/folio-main.component';
import { AboutComponent } from '../app/about/folio-about.component';
import { ProjectsComponent } from '../app/projects/folio-projects.component';


//custom services
import { FolioAboutService }from '../app/about/folio-about.service';
import { FolioCommonService }from '../app/common/folio-commonservice';


import { AppComponent } from './app.component';

//defining routing - add 404 later
const routes:Routes = [
  {path:'', component:AboutComponent , pathMatch:'full'},
  {path:'about', component:AboutComponent},
  {path:'accolades', component:AboutComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'experience', component:AboutComponent},
  {path:'contact', component:AboutComponent},
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FolioAboutService,FolioCommonService],
  bootstrap: [MainComponent],
  exports:[MainComponent]
})
export class AppModule { }
