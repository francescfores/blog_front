import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeplaygroundComponent } from './codeplayground.component';

describe('CodeplaygroundComponent', () => {
  let component: CodeplaygroundComponent;
  let fixture: ComponentFixture<CodeplaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeplaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeplaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
