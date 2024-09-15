import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsATraiterComponent } from './reservations-atraiter.component';

describe('ReservationsATraiterComponent', () => {
  let component: ReservationsATraiterComponent;
  let fixture: ComponentFixture<ReservationsATraiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsATraiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsATraiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
