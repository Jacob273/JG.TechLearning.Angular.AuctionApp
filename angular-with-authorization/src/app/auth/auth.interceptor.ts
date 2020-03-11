import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private bearerToken = '';

  constructor(private authService: AuthService) {
    console.log('Hello AuthInterceptor!');
    this.authService.getToken().subscribe((token) => {
      this.bearerToken = token;
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: request.headers.set('Authorization', this.bearerToken)
    });
    console.log('Hello intercept!');
    return next.handle(authReq).pipe(this.modifyResponse(), tap(r => console.log('RESPONSE', r)));
    // return next.handle(authReq).pipe(this.modifyResponse());
  }

  modifyResponse() {
    return map((event: HttpEvent<any>) => {
      // Do zmiany response zamiast tap użyje map;
      if (event instanceof HttpResponse) {
        // Modyfikacja response
        // return {
        //   ...event,
        //   statusText: 'OKY'
        // } as HttpResponse<any>;
      }
      // jeśli map to, inne eventy nienaruszone:
      return event;
    })
  }
}
