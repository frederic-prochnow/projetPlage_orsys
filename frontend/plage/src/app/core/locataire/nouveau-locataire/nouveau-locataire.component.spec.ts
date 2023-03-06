import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauLocataireComponent } from './nouveau-locataire.component';

describe('NouveauLocataireComponent', () => {
  let component: NouveauLocataireComponent;
  let fixture: ComponentFixture<NouveauLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauLocataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
