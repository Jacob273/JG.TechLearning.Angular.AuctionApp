import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';

const toggleCondition = map(isLogged => !isLogged);

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styles: []
})
export class MainMenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    {href: 'auctions', title: 'Aukcje'},
    {href: 'promotions', title: 'Promocje'},
    {href: 'advices', title: 'Podpowiadamy'}
  ];

  isMenuShown = false;
  isLoggedOut$: Observable<boolean> = this.authService.isLoggedIn().pipe(toggleCondition);

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuShown = !this.isMenuShown;
  }

  handleLogOutClick() {
    this.authService.logOut();
  }
}
