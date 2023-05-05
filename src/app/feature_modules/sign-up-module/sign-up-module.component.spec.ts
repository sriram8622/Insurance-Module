import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpModuleComponent } from './sign-up-module.component';

describe('SignUpModuleComponent', () => {
  let component: SignUpModuleComponent;
  let fixture: ComponentFixture<SignUpModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpModuleComponent]
    });
    fixture = TestBed.createComponent(SignUpModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
