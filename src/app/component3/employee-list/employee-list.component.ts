import { Component, Input } from '@angular/core';

export interface SimpleChanges<T>{
  firstChange: boolean;
  previousValue: T;
  currentValue: T;
  isFirstChange: () => boolean;
}

export function OnChange<T = any>(callback: (value: T, simpleChange?: SimpleChanges<T>) => void) {
  const cachedValueKey = Symbol('cachedValue');
  const isSetKey = Symbol('isFirstChange');
  return (target: any, key: PropertyKey) => {
    Object.defineProperty(target, key, {
      set: function (value) {

        if (this[isSetKey] && this[cachedValueKey] === value) {
          return;
        }
        const oldValue = this[cachedValueKey];
        this[cachedValueKey] = value;
        const simpleChange:SimpleChanges<T>={
          firstChange: !this[isSetKey],
          previousValue: oldValue,
          currentValue: value,
          isFirstChange: () => !this[isSetKey],
        };
        this[isSetKey] = true;
        callback.call(this, value, simpleChange);
      },
      get: function () {
        return this[cachedValueKey];
      },
    });
  };
}
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent{
 @OnChange<string>(function(value,simpleChanges) {
    console.log(`title is changed to : ${value}`,simpleChanges);
 })
 @Input()
 name:string | undefined;





 }

