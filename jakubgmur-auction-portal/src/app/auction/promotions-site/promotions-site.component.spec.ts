import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsSiteComponent } from './promotions-site.component';

describe('PromotionsSiteComponent', () => {
  let component: PromotionsSiteComponent;
  let fixture: ComponentFixture<PromotionsSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionsSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
