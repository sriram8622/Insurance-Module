/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarClaimComponent } from './car-claim.component';

describe('CarClaimComponent', () => {
  let component: CarClaimComponent;
  let fixture: ComponentFixture<CarClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
