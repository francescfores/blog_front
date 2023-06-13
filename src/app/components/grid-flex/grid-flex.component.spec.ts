import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFlexComponent } from './grid-flex.component';

describe('GridFlexComponent', () => {
  let component: GridFlexComponent;
  let fixture: ComponentFixture<GridFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
