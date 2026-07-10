import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorsComponent } from './calculators.component';

describe('CalculatorsComponent', () => {
  let component: CalculatorsComponent;
  let fixture: ComponentFixture<CalculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
