import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBasketComponent } from './property-basket.component';

describe('PropertyBasketComponent', () => {
  let component: PropertyBasketComponent;
  let fixture: ComponentFixture<PropertyBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
