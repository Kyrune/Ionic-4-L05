import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap1pt2Page } from './chap1pt2.page';

describe('Chap1pt2Page', () => {
  let component: Chap1pt2Page;
  let fixture: ComponentFixture<Chap1pt2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap1pt2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap1pt2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
