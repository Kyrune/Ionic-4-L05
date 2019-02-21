import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap2pt3Page } from './chap2pt3.page';

describe('Chap2pt3Page', () => {
  let component: Chap2pt3Page;
  let fixture: ComponentFixture<Chap2pt3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap2pt3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap2pt3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
