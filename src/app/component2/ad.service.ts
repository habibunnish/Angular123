import { Injectable } from '@angular/core';
import { AdItem } from './AdItem';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  getAds(){
    return [
      new AdItem(
        HeroProfileComponent,
        {name:'Bombasto',bio:'Brave as they come'}
      ),
      new AdItem(
        HeroProfileComponent,
        {name:'Dr.Iq',bio:'smart as they become'}
      ),
      new AdItem(
        HeroProfileComponent,
        {headline:'Hiring for several fresher',body:'submit your resume'}
      ),
      new AdItem(
        HeroProfileComponent,
        {headline:'opening in all department',body:'apply today'}
      )
    ];
  }
}
