import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styles: []
})
export class MainMenuComponent implements OnInit {

  buttonStyle = {
    color: 'red',
    backgroundColor: 'lightblue'
  };

  showMenu = false;
  menuItems: MenuItem[] = [
    {name: 'Aukcje', link: 'auctions'},
    {name: 'Promocje', link: 'promotions'},
    {name: 'Podpowiadamy', link: 'advices'}
  ];

  constructor() { }

  ngOnInit(): void {

  }


handleToggleMenu() {
  this.showMenu = !this.showMenu;
}

}
