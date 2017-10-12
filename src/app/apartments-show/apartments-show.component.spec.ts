import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsShowComponent } from './apartments-show.component';

describe('ApartmentsShowComponent', () => {
  let component: ApartmentsShowComponent;
  let fixture: ComponentFixture<ApartmentsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
