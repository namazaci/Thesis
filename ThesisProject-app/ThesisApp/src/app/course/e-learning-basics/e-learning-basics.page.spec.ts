import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningBasicsPage } from './e-learning-basics.page';

describe('ELearningBasicsPage', () => {
  let component: ELearningBasicsPage;
  let fixture: ComponentFixture<ELearningBasicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELearningBasicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningBasicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
