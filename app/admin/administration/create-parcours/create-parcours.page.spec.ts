import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParcoursPage } from './create-parcours.page';

describe('CreateParcoursPage', () => {
  let component: CreateParcoursPage;
  let fixture: ComponentFixture<CreateParcoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateParcoursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParcoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
