import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGamePageComponent } from './question-game-page.component';

describe('QuestionGamePageComponent', () => {
  let component: QuestionGamePageComponent;
  let fixture: ComponentFixture<QuestionGamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionGamePageComponent]
    });
    fixture = TestBed.createComponent(QuestionGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
