import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixWheelerComponent } from './six-wheeler.component';

describe('SixWheelerComponent', () => {
  let component: SixWheelerComponent;
  let fixture: ComponentFixture<SixWheelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixWheelerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixWheelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
