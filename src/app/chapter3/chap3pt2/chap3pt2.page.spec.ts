import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap3pt2Page } from './chap3pt2.page';

describe('Chap3pt2Page', () => {
  let component: Chap3pt2Page;
  let fixture: ComponentFixture<Chap3pt2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap3pt2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap3pt2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
