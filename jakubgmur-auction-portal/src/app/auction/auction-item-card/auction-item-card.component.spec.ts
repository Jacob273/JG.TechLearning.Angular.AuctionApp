import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuctionItemCardComponent } from './auction-item-card.component';
import { AuctionItem } from '../auction-item';

fdescribe('AuctionItemCardComponent', () => {
  let component: AuctionItemCardComponent;
  let fixture: ComponentFixture<AuctionItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit auction when handleAddToCardClick', () => {
    // GIVEN (ARRANGE)
    const auction: AuctionItem = {title: 'Aukcja - nowy komputer'} as AuctionItem;
    component.auction = auction;
    const spyAddToCart = spyOn(component.addToCart, 'emit');
    // WHEN (ACT)
    component.handleAddToCardClick();
    // THEN (ASSERT)
    expect(spyAddToCart).toHaveBeenCalledWith(auction);
  });
});
