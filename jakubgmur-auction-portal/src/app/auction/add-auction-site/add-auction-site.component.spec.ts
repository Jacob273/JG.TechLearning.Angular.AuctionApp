import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuctionSiteComponent } from './add-auction-site.component';

describe('AddAuctionSiteComponent', () => {
  let component: AddAuctionSiteComponent;
  let fixture: ComponentFixture<AddAuctionSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAuctionSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuctionSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
