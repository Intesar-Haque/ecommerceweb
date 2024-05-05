import { Component } from '@angular/core';

@Component({
  selector: 'app-home-left-bar',
  templateUrl: './home-left-bar.component.html',
  styleUrl: './home-left-bar.component.css'
})
export class HomeLeftBarComponent {
  isHovered = false;

  toggleHover(state: boolean) {
    this.isHovered = state;
  }
}
