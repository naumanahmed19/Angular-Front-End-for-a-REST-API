import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsAddEditComponent } from './apartments-create.component';

describe('ApartmentsAddEditComponent', () => {
  let component: ApartmentsAddEditComponent;
  let fixture: ComponentFixture<ApartmentsAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentsAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
