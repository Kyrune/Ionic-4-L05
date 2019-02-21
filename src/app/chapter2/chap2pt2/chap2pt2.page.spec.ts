import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap2pt2Page } from './chap2pt2.page';

describe('Chap2pt2Page', () => {
  let component: Chap2pt2Page;
  let fixture: ComponentFixture<Chap2pt2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap2pt2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap2pt2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
