import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsListeComponent } from './reservations-liste.component';

describe('ReservationsListeComponent', () => {
  let component: ReservationsListeComponent;
  let fixture: ComponentFixture<ReservationsListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
