import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionItemCardComponent } from './auction-item-card.component';

describe('AuctionItemCardComponent', () => {
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
});
