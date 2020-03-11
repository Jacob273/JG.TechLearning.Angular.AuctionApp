import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicesSiteComponent } from './advices-site.component';

describe('AdvicesSiteComponent', () => {
  let component: AdvicesSiteComponent;
  let fixture: ComponentFixture<AdvicesSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvicesSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvicesSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
