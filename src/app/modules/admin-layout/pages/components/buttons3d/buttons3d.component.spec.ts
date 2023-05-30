import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttons3dComponent } from './buttons3d.component';

describe('Buttons3dComponent', () => {
  let component: Buttons3dComponent;
  let fixture: ComponentFixture<Buttons3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Buttons3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttons3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
