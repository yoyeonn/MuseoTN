import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseeDetail } from './musee-detail';

describe('MuseeDetail', () => {
  let component: MuseeDetail;
  let fixture: ComponentFixture<MuseeDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuseeDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseeDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
