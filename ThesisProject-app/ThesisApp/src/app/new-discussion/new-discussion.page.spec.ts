import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscussionPage } from './new-discussion.page';

describe('NewDiscussionPage', () => {
  let component: NewDiscussionPage;
  let fixture: ComponentFixture<NewDiscussionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiscussionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiscussionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
