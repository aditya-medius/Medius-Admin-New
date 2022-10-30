import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvidhaKendraComponent } from './suvidha-kendra.component';

describe('SuvidhaKendraComponent', () => {
  let component: SuvidhaKendraComponent;
  let fixture: ComponentFixture<SuvidhaKendraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuvidhaKendraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuvidhaKendraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
