import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFeaturesOfTalentLMSPage } from './advance-features-of-talent-lms.page';

describe('AdvanceFeaturesOfTalentLMSPage', () => {
  let component: AdvanceFeaturesOfTalentLMSPage;
  let fixture: ComponentFixture<AdvanceFeaturesOfTalentLMSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceFeaturesOfTalentLMSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceFeaturesOfTalentLMSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
