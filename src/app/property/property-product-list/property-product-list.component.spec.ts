import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyProductListComponent } from './property-product-list.component';

describe('PropertyProductListComponent', () => {
  let component: PropertyProductListComponent;
  let fixture: ComponentFixture<PropertyProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
