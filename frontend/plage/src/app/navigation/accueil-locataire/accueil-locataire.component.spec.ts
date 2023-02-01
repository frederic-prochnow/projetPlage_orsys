import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilLocataireComponent } from './accueil-locataire.component';

describe('AccueilLocataireComponent', () => {
  let component: AccueilLocataireComponent;
  let fixture: ComponentFixture<AccueilLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilLocataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
