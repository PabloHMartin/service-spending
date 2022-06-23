import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewViewComponent } from './form-new-view.component';

describe('FormNewViewComponent', () => {
  let component: FormNewViewComponent;
  let fixture: ComponentFixture<FormNewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
