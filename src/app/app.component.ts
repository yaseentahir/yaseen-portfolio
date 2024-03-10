import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.onWindowScroll(); // Check initial scroll position
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = this.el.nativeElement.querySelectorAll('section');
    console.log(sections);

    sections.forEach((section: HTMLElement) => {
      const navItem = this.el.nativeElement.querySelector(
        `a[href="#${section.id}"]`
      );
      // navItem.classList.add('active');
      // console.log(navItem);

      if (navItem) {
        const rect = section.getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;

        if (topShown && bottomShown) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  }
}
