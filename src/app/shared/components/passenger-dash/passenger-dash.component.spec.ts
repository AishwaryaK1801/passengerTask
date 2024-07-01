import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDashComponent } from './passenger-dash.component';

describe('PassengerDashComponent', () => {
  let component: PassengerDashComponent;
  let fixture: ComponentFixture<PassengerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
