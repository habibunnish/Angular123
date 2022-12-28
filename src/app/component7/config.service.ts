import { HttpClient,HttpErrorResponse ,HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';


export interface Config{
  personUrl:string;
  textfile:string;
  date:any;
 }

@Injectable({
  providedIn:'root'
})

export class ConfigService {

  configUrl='assets/config.json';
  constructor(private http:HttpClient){}
  
  getConfig(){
    return this.http.get<Config>(this.configUrl)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  getConfig_1(){
    return this.http.get<Config>(this.configUrl)
    
  }
  getConfig_2(){
    return this.http.get<Config>(this.configUrl);
  }
  getConfig_3(){
    return this.http.get<Config>(this.configUrl)
    .pipe(
      catchError(this.handleError)
    );
  }
  getConfigResponse():Observable<HttpResponse<Config>>{
    return this.http.get<Config>
    (this.configUrl,{observe:'response'});
  }
  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('An error occured : ', error.error);
    }
    else{
      console.error(
        `Backend returned code ${error.status},body was :`,error.error);
      }
      return throwError(()=> new Error ('something bad happened.try again')
      );
  }
  makeIntentionalError(){
    return this.http.get('not/a/real/url')
    .pipe(
      catchError(this.handleError)
    );
  }
  
}
