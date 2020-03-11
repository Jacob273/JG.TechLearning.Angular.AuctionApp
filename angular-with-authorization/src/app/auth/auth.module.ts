import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginSiteComponent } from './login-site/login-site.component';
import { SecretSiteComponent } from './secret-site/secret-site.component';

@NgModule({
  declarations: [LoginSiteComponent, SecretSiteComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class AuthModule { }
