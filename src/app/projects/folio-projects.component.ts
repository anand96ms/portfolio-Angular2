import { Component }  from '@angular/core';
import { FolioCommonService } from '../common/folio-commonservice';

@Component({
    selector:'accolades',
    templateUrl:'./folio-projects.html'
})
export class ProjectsComponent{
   profile:Object;
constructor(
    private appService: FolioCommonService){
        appService.getProfile().subscribe(data=>this.profile=data);               
    }
    
}