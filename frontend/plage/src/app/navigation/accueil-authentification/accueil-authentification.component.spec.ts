import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilAuthentificationComponent } from './accueil-authentification.component';

describe('AccueilAuthentificationComponent', () => {
  let component: AccueilAuthentificationComponent;
  let fixture: ComponentFixture<AccueilAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilAuthentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
