import { Component } from '@angular/core';
import { config } from 'rxjs';
import { Config, ConfigService } from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {
  error:any;
  headers:string[]=[];
  config:Config | undefined ;

  constructor(private configService :ConfigService){}
 
  clear(){
    this.config=undefined;
    this.error=undefined;
    this.headers=[];
  }
  showConfig(){
    this.configService.getConfig()
    .subscribe({
      next:(data:Config)=> this.config={...data},
      error: error=>this.error=error,
    });
  }
  showConfig_v1(){
    this.configService.getConfig_1()
    .subscribe((data :Config)=>this.config={
      personUrl:data.personUrl,
      textfile:data.textfile,
      date:data.date,
    });
  }
  showConfig_v2() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = { ...data });
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      .subscribe(resp => {
  
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
        this.config = { ...resp.body! };
      });
  }
  makeError() {
    this.configService.makeIntentionalError()
    .subscribe({ error: error => this.error = error.message });
  }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}
