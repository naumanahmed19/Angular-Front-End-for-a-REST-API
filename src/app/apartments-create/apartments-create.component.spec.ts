import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsCreateComponent } from './apartments-create.component';

describe('ApartmentsCreateComponent', () => {
  let component: ApartmentsCreateComponent;
  let fixture: ComponentFixture<ApartmentsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
