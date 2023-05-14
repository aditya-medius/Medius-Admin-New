import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvidhaKendraViewComponent } from './suvidha-kendra-view.component';

describe('SuvidhaKendraViewComponent', () => {
  let component: SuvidhaKendraViewComponent;
  let fixture: ComponentFixture<SuvidhaKendraViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuvidhaKendraViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuvidhaKendraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
