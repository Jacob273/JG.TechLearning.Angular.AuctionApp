import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styles: []
})
export class MainMenuComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }


handleToggleMenu()
{
  this.showMenu = !this.showMenu;
}


}
