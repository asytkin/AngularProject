import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBasketItemComponent } from './property-basket-item.component';

describe('PropertyBasketItemComponent', () => {
  let component: PropertyBasketItemComponent;
  let fixture: ComponentFixture<PropertyBasketItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBasketItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBasketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
