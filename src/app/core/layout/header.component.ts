import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent {
  today: number = Date.now();
  isActive: boolean = false;

  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
