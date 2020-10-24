import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentSlideComponent } from './treatment-slide.component';

describe('TreatmentSlideComponent', () => {
  let component: TreatmentSlideComponent;
  let fixture: ComponentFixture<TreatmentSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
