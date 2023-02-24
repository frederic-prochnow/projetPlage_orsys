import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInscriptionComponent } from './nav-inscription.component';

describe('NavInscriptionComponent', () => {
  let component: NavInscriptionComponent;
  let fixture: ComponentFixture<NavInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
