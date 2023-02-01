import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsLocataireComponent } from './reservations-locataire.component';

describe('ReservationsLocataireComponent', () => {
  let component: ReservationsLocataireComponent;
  let fixture: ComponentFixture<ReservationsLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsLocataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
