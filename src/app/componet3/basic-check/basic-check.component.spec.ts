import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCheckComponent } from './basic-check.component';

describe('BasicCheckComponent', () => {
  let component: BasicCheckComponent;
  let fixture: ComponentFixture<BasicCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
