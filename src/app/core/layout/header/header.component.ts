import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as menuItems from './menu-items.json';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {
  today: number = Date.now();
  isActive: boolean = false;

  toggleMenu() {
    this.isActive = !this.isActive;
  }
  menuItems: any = menuItems; // Assigning the imported menu items to the menuItems array

  constructor() {}
}
