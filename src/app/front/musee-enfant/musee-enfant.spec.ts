import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseeEnfant } from './musee-enfant';

describe('MuseeEnfant', () => {
  let component: MuseeEnfant;
  let fixture: ComponentFixture<MuseeEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuseeEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseeEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
