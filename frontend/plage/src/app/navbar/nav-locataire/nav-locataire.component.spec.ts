import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLocataireComponent } from './nav-locataire.component';

describe('NavLocataireComponent', () => {
  let component: NavLocataireComponent;
  let fixture: ComponentFixture<NavLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLocataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
