import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLineComponent } from './nav-line.component';

describe('NavLineComponent', () => {
  let component: NavLineComponent;
  let fixture: ComponentFixture<NavLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavLineComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
