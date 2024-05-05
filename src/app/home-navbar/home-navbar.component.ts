import { Component } from '@angular/core';

@Component({
  selector: '[app-home-navbar]',
  templateUrl: './home-navbar.component.html',
  styleUrl: './home-navbar.component.css'
})
export class HomeNavbarComponent {
  isSidebarVisible: boolean = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  closeSidebar() {
    this.isSidebarVisible = false;
  }
}
