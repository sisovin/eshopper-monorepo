import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn = false;
  cartItemCount = 0;

  constructor() {}

  onSearch(query: string) {
    console.log('Search query:', query);
  }

  onLogin() {
    console.log('Login clicked');
  }

  onLogout() {
    console.log('Logout clicked');
  }

  onCartClick() {
    console.log('Cart clicked');
  }
}
