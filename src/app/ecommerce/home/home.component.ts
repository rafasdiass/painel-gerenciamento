import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-ecommerce',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeEcommerceComponent {
  constructor(private router: Router) {}

  redirectToDashboard(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
