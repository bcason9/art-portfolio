import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galleries } from './galleries';

describe('Galleries', () => {
  let component: Galleries;
  let fixture: ComponentFixture<Galleries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galleries],
    }).compileComponents();

    fixture = TestBed.createComponent(Galleries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
