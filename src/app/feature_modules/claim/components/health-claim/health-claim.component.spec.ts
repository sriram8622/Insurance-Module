/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HealthClaimComponent } from './health-claim.component';

describe('HealthClaimComponent', () => {
  let component: HealthClaimComponent;
  let fixture: ComponentFixture<HealthClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
