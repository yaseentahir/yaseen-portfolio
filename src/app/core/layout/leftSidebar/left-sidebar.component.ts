import { Component } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
  standalone: true,
})
export class LeftSidebar {
  today: number = Date.now();
  isActive: boolean = false;
}
