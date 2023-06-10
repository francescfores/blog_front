import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPostComponent } from './blog-admin.component';

describe('BlogAdminComponent', () => {
  let component: ShowPostComponent;
  let fixture: ComponentFixture<ShowPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
