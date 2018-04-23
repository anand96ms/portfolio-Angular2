import { Component }  from '@angular/core';
import { FolioCommonService } from '../common/folio-commonservice';

@Component({
    selector:'about',
    templateUrl:'./folio-about.html',

})
export class AboutComponent{
    profile:Object;
constructor(
    private appService: FolioCommonService){
        appService.getProfile().subscribe(data => this.profile = data);            
    }
   
}