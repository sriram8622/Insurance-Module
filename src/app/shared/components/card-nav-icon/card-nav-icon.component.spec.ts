/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardNavIconComponent } from './card-nav-icon.component';

describe('CardNavIconComponent', () => {
  let component: CardNavIconComponent;
  let fixture: ComponentFixture<CardNavIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNavIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNavIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
