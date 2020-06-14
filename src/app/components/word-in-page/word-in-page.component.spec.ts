/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordInPageComponent } from './word-in-page.component';

describe('WordInPageComponent', () => {
  let component: WordInPageComponent;
  let fixture: ComponentFixture<WordInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
