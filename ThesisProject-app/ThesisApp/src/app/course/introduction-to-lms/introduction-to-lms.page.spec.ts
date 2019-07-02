import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToLMSPage } from './introduction-to-lms.page';

describe('IntroductionToLMSPage', () => {
  let component: IntroductionToLMSPage;
  let fixture: ComponentFixture<IntroductionToLMSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionToLMSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionToLMSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
