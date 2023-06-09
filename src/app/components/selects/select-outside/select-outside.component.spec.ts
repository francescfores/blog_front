import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOutsideComponent } from './select-outside.component';

describe('SelectOutsideComponent', () => {
  let component: SelectOutsideComponent;
  let fixture: ComponentFixture<SelectOutsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOutsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
