import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePointPage } from './create-point.page';

describe('CreatePointPage', () => {
  let component: CreatePointPage;
  let fixture: ComponentFixture<CreatePointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePointPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
