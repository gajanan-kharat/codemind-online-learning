import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRightComponent } from './login-right.component';

describe('LoginRightComponent', () => {
  let component: LoginRightComponent;
  let fixture: ComponentFixture<LoginRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
