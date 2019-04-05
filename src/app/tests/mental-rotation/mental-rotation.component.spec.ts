import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalRotationComponent } from './mental-rotation.component';

describe('MentalRotationComponent', () => {
  let component: MentalRotationComponent;
  let fixture: ComponentFixture<MentalRotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalRotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
