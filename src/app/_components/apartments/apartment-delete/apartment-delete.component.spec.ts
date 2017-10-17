import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentDeleteComponent } from './apartment-delete.component';

describe('ApartmentDeleteComponent', () => {
  let component: ApartmentDeleteComponent;
  let fixture: ComponentFixture<ApartmentDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
