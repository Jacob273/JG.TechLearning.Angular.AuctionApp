import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicesSiteComponent } from './advices-site.component';
import { RouterTestingModule } from '@angular/router/testing';
// import { Router, ActivatedRoute } from '@angular/router';

describe('AdvicesSiteComponent', () => {
  let component: AdvicesSiteComponent;
  let fixture: ComponentFixture<AdvicesSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        // Mogę sam zaprovidować rzeczy
        // {provide: Router, useValue: {
        //   navigate() {}
        // }},
        // {provide: ActivatedRoute, useValue: {}},
      ],
      declarations: [ AdvicesSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvicesSiteComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have handle Article Click Method', () => {
    expect(component.handleArticleClick).toBeTruthy();
  });

  describe('My happy creations', () => {

    it('should do sth', () => {

    });
  });

});
