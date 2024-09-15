import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsTotalComponent } from './reservations-total.component';

describe('ReservationsTotalComponent', () => {
  let component: ReservationsTotalComponent;
  let fixture: ComponentFixture<ReservationsTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
