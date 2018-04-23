import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


const api_url = "https://anand96ms.github.io/profile.json";
@Injectable()
export class FolioCommonService  {

constructor(private http: Http) {}

 getProfile(): Observable<any> {
    return this.http
    .get(api_url)
    .map(response => response.json() as Object)
  }
}