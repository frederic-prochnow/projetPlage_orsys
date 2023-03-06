import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocataireValiderComponent } from './locataire-valider.component';

describe('LocataireValiderComponent', () => {
  let component: LocataireValiderComponent;
  let fixture: ComponentFixture<LocataireValiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocataireValiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocataireValiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
