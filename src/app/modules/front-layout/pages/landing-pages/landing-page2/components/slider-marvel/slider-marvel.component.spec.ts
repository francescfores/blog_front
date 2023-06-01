import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMarvelComponent } from './slider-marvel.component';

describe('SliderMarvelComponent', () => {
  let component: SliderMarvelComponent;
  let fixture: ComponentFixture<SliderMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
