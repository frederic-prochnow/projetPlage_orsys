import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilConcessionnaireComponent } from './accueil-concessionnaire.component';

describe('AccueilConcessionnaireComponent', () => {
  let component: AccueilConcessionnaireComponent;
  let fixture: ComponentFixture<AccueilConcessionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilConcessionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilConcessionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
