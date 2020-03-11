import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionCounterComponent } from './auction-counter.component';

describe('AuctionCounterComponent', () => {
  let component: AuctionCounterComponent;
  let fixture: ComponentFixture<AuctionCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
