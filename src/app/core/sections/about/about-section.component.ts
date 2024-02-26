import { Component } from '@angular/core';

@Component({
  selector: 'app-section-about',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
  standalone: true,
})
export class AboutSection {
  today: number = Date.now();
}
