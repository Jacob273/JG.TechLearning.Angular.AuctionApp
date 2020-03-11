import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCardComponent } from './action-card.component';
import { AuctionItem } from '../auction-item';

describe('ActionCardComponent', () => {
  let component: ActionCardComponent;
  let fixture: ComponentFixture<ActionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire event with AuctionItem when add to cart button clicked', () => {
    // Arrange
    const auction: AuctionItem = {title: 'Hello !'} as AuctionItem;
    component.auction = auction;
    const addToCartSpy = spyOn(component.addToCart, 'emit');
    const nativeElement = fixture.nativeElement;

    // Act
    fixture.detectChanges();
    // component.handleCartClick();
    nativeElement.querySelector('.btn.btn-primary').click();


    // Assert
    expect(addToCartSpy).toHaveBeenCalledWith({title: 'Hello !'} as AuctionItem);
  })
});
