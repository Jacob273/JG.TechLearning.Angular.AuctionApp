import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSiteComponent } from './shopping-cart-site.component';

describe('ShoppingCartSiteComponent', () => {
  let component: ShoppingCartSiteComponent;
  let fixture: ComponentFixture<ShoppingCartSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
