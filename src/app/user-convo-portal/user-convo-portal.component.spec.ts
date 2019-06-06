import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConvoPortalComponent } from './user-convo-portal.component';

describe('UserConvoPortalComponent', () => {
  let component: UserConvoPortalComponent;
  let fixture: ComponentFixture<UserConvoPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConvoPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConvoPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
