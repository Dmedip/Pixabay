import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  public storage:any;
  constructor(private http: Http) {  }
  
  getIntialImages(pagenumber){
    const requestOptions = {
      headers: new Headers({
        'Access-Control-Allow-Origin': '*'
     })
    };
    var url = 'https://pixabay.com/api/?key=8506502-fd530cf53ce4c9ff2733ae363&page='+pagenumber;
    return this.http.get(url)
    .map((res:Response) => res.json());
  }
}
