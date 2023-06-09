import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutsiteComponent } from './input-outsite.component';

describe('InputOutsiteComponent', () => {
  let component: InputOutsiteComponent;
  let fixture: ComponentFixture<InputOutsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
