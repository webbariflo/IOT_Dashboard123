import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewusersComponent } from './newusers.component';

describe('NewusersComponent', () => {
  let component: NewusersComponent;
  let fixture: ComponentFixture<NewusersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewusersComponent]
    });
    fixture = TestBed.createComponent(NewusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
