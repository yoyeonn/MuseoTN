import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontList } from './front-list';

describe('FrontList', () => {
  let component: FrontList;
  let fixture: ComponentFixture<FrontList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
