import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isLoggedIn().pipe(
      // Efekt uboczny jesli ktoś nie jest zalogowany
      // Korzystamy z kompozycji operatorów rxjs zamiast się subskrybować
      // tap nie zmodyfikuje nam strumienia, nie musimy nawet nic zwracać !
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          console.log(next);
          this.router.navigate(['log-in'], {});
        }
      })
    );
  }
  
}
