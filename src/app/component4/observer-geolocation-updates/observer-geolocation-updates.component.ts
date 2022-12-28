import { Component } from '@angular/core';
import { Observable, Observer, of} from 'rxjs';

@Component({
  selector: 'app-observer-geolocation-updates',
  templateUrl: './observer-geolocation-updates.component.html',
  styleUrls: ['./observer-geolocation-updates.component.css']
})
export class ObserverGeolocationUpdatesComponent {
  
 readonly  geolocations=new Observable((observer)=>{
    let watchId: number;

    if ('geolocation' in navigator){
      watchId =navigator.geolocation.watchPosition((currentposition: GeolocationPosition)=>{
        observer.next(currentposition);
      },(error:GeolocationPositionError)=>{
        observer.error(error);
      });
    }else{
      observer.error('Geolocation not available');
    }
    return{
      unsubscribe(){
        navigator.geolocation.clearWatch(watchId);
      }
    };
  });
  readonly geolocationsSubscription=this.geolocations.subscribe({
    next(currentposition){
      console.log('Current Position :' ,currentposition);
    },
    error(msg){
      console.log('Error Getting location :', msg);
    }
  });

 time=new Observable<string>((_observer:Observer<string>)=>{
      setTimeout(() =>this.geolocationsSubscription.unsubscribe()),2000});
   
      // setTimeout(function() {

      //   this.geolocationsSubscription.unsubscribe();
    
      // }, 10000);

//subscribing using observer

// const ourObservable = of(1,2,3);
//   const ourObserver={
//      next: (i: string) => 
//      console.log('Our Observer got a next value: ' + i),

//     error: (error: string) =>
//      console.error('Our Observer got an error: ' + error),

//     complete: () => 
//     console.log('Our Observer got a complete notification'),

//   };


//   ourObservable.subscribe(ourObserver: any);
 
}
    
