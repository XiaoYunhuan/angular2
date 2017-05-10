import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewerCmpComponent } from './newer-cmp.component';

describe('NewerCmpComponent', () => {
  let component: NewerCmpComponent;
  let fixture: ComponentFixture<NewerCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewerCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewerCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
