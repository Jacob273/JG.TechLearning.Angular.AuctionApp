import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSiteComponent } from './login-site.component';
import { AuthService } from '../auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Credentials } from '../credentials';
import { Observable, of } from 'rxjs';

describe('LoginSiteComponent', () => {
  let component: LoginSiteComponent;
  let fixture: ComponentFixture<LoginSiteComponent>;
  let authService: AuthService;

  class MockAuthService {
    logIn(credentials: Credentials): Observable<boolean> {
      return of(false);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [
        {provide: AuthService, useClass: MockAuthService}
      ],
      declarations: [ LoginSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSiteComponent);
    authService = TestBed.inject(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send right credentials when handleLogInClick', () => {
    // GIVEN (ARRANGE)
    const spyOnLogIn = spyOn(authService, 'logIn').and.callThrough();
    // const spyOnLogIn = spyOn(authService, 'logIn').and.returnValue(of(true));
    const myCredentials = {email: 'moj@mail.pl', password: '45*'};
    component.credentials = myCredentials;

    // WHEN (ACT)
    component.handleLogInClick();

    // THEN (ASSERT)
    expect(spyOnLogIn).toHaveBeenCalledWith(myCredentials);
  })

});
