import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn3dComponent } from './btn3d.component';

describe('Btn3dComponent', () => {
  let component: Btn3dComponent;
  let fixture: ComponentFixture<Btn3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Btn3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Btn3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
