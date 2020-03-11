import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Credentials } from '../credentials';

@Component({
  selector: 'app-login-site',
  template: `
    <h2 class="my-3"> Login site </h2>
    <section class="mt-5 d-flex justify-content-center">
      <form (submit)="$event.preventDefault()">
        <div class="form-group">
          <label for="email">Adres e-mail</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-envelope"></i>
            </span>
            </div>
            <input id="email" type="text" name="email" [(ngModel)]="credentials.email" class="form-control" />
          </div>
        </div>

        <div class="form-group">
          <label for="password">Hasło dostępu</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-key"></i>
            </span>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              class="form-control"
              [(ngModel)]="credentials.password"
            />
          </div>
        </div>
        <div *ngIf="errorMessage">
          <div class="alert alert-danger"> {{errorMessage}} </div>
        </div>
        <div class="text-right">
          <i class="fa fa-spinner fa-spin mr-2" *ngIf="requestSent"></i>
          <button class="btn btn-primary" type="submit" (click)="handleLogInClick()" [disabled]="requestSent">
            <i class="fa fa-sign-in-alt"></i> Zaloguj
          </button>
        </div>
      </form>
    </section>
  `,
  styles: []
})
export class LoginSiteComponent {

  requestSent = false;
  errorMessage = '';
  credentials: Credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  handleLogInClick() {
    this.requestSent = true;
    this.errorMessage = '';
    this.authService.logIn(this.credentials).subscribe((isOk) => {
        this.requestSent = false;
        if (isOk) {
          return this.router.navigate(['/secret']);
        }
        this.errorMessage = 'Logowanie nie powiodło się 😱';
    });
  }
}
