import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddViewCardComponent } from './add-view-card.component';

describe('AddViewCardComponent', () => {
  let component: AddViewCardComponent;
  let fixture: ComponentFixture<AddViewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddViewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
