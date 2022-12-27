import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

const ALTER_EGOS=['Eric'];

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  isAlterEgoTaken(alterEgo:string):
  Observable<boolean>{
    const isTaken=ALTER_EGOS.includes(alterEgo);
    return of(isTaken).pipe(delay(4000));
  }

}
