import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersScoresComponent } from './all-users-scores.component';

describe('AllUsersScoresComponent', () => {
  let component: AllUsersScoresComponent;
  let fixture: ComponentFixture<AllUsersScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUsersScoresComponent]
    });
    fixture = TestBed.createComponent(AllUsersScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
