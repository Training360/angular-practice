import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opacity: number = 1;
  @HostListener('window:scroll', ['$event'])
  scrollHandler($event): void {
    if ($event.currentTarget.pageYOffset > 100) {
      this.opacity = 0.5;
    } else {
      this.opacity = 1;
    }
  }


  title = 'nodejs-angular-webshop-project';
}
