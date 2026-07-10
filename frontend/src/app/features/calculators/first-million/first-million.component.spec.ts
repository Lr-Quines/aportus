import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMillionComponent } from './first-million.component';

describe('FirstMillionComponent', () => {
  let component: FirstMillionComponent;
  let fixture: ComponentFixture<FirstMillionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstMillionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstMillionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
