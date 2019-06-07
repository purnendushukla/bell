import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConvoStartPortalComponent } from './user-convo-start-portal.component';

describe('UserConvoStartPortalComponent', () => {
  let component: UserConvoStartPortalComponent;
  let fixture: ComponentFixture<UserConvoStartPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConvoStartPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConvoStartPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
