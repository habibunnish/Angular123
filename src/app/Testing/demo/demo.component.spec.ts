import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemoComponent } from './demo.component';

// //componentdom testing method
// describe('DemoComponent', () => {
//   let component: DemoComponent;
//   let fixture: ComponentFixture<DemoComponent>;

//   beforeEach(waitForAsync (() => {
//    TestBed.configureTestingModule({
//       declarations: [ DemoComponent ]
//     }).compileComponents();
//   }));
  
//    beforeEach(()=>{
//     fixture = TestBed.createComponent(DemoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//    });

//   it('should create', () => {
//     expect(component).toBeDefined();
//   });
// });

// //reducing setup method
// describe('DemoComponent (minimal)',()=>{
//   it('should create' , ()=>{
//     TestBed.configureTestingModule({declarations :[DemoComponent]});
//     const fixture=TestBed.createComponent(DemoComponent);
//     const component=fixture.componentInstance;
//     const h1=fixture.nativeElement.querySelector('h1');
//     expect(component).toBeDefined();
//   });
// });

//this wouldnot show doesnot bind data (create component)


//
describe('DemoComponent (minimal)',()=>{
  let component:DemoComponent;
  let fixture:ComponentFixture<DemoComponent>;
  let h1:HTMLElement;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[DemoComponent],
    });
    fixture=TestBed.createComponent(DemoComponent);
    component=fixture.componentInstance;
    h1=fixture.nativeElement.querySelector('h1');
  });
  it('should display original title',()=>{
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });
})