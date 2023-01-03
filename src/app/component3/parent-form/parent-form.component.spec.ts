//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ParentFormComponent } from "./parent-form.component";

describe("ParentFormComponent", () => {
  let component: ParentFormComponent;
  let fixture: ComponentFixture<ParentFormComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentFormComponent],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy();
    });
  });
})