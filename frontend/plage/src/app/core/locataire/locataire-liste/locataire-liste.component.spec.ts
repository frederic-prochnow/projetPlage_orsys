import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocataireListeComponent } from './locataire-liste.component';

describe('LocataireListeComponent', () => {
  let component: LocataireListeComponent;
  let fixture: ComponentFixture<LocataireListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocataireListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocataireListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
