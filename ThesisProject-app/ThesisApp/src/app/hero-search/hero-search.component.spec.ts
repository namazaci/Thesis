import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchPage } from './hero-search.page';

describe('HeroSearchPage', () => {
  let component: HeroSearchPage;
  let fixture: ComponentFixture<HeroSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
