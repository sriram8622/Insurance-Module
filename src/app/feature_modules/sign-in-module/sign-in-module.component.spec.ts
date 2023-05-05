import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInModuleComponent } from './sign-in-module.component';

describe('SignInModuleComponent', () => {
  let component: SignInModuleComponent;
  let fixture: ComponentFixture<SignInModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInModuleComponent]
    });
    fixture = TestBed.createComponent(SignInModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
