import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';

import { Credentials } from './credentials';
import { SecretMessage } from './secret-message';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new BehaviorSubject<User>(null);
  private token$ = this.user$.pipe<string>(map(user => user ? user.token : ''));
  private isLoggedIn$ = this.token$.pipe<boolean>(map(t => !!t));

  private secretServerURL = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }

  logIn(credentials: Credentials): Observable<boolean> {
      return this.httpClient.post<User>(this.secretServerURL + '/login', credentials)
        .pipe(
          tap(user => this.user$.next(user)),
          mapTo(true),
          catchError(() => of(false))
        );
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$;
  }

  logOut() {
     this.user$.next(null);
  }

  getToken(): Observable<string> {
     return this.token$;
  }

  getSecretMessage(): Observable<SecretMessage> {
    return this.httpClient.get<SecretMessage>(this.secretServerURL + '/secret-resource');
  }
}
