import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap1pt3Page } from './chap1pt3.page';

describe('Chap1pt3Page', () => {
  let component: Chap1pt3Page;
  let fixture: ComponentFixture<Chap1pt3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap1pt3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap1pt3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
