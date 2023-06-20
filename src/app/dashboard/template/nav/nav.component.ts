import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}

  onNavigate(path: string): void {
    this.router.navigateByUrl(path);
  }

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
}
