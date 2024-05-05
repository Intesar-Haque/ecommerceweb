import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: '[app-home-left-bar-men]',
  templateUrl: './home-left-bar-men.component.html',
  styleUrl: './home-left-bar-men.component.css'
})
export class HomeLeftBarMenComponent {

  isHovered = false;

  toggleHover(state: boolean) {
    this.isHovered = state;
  }
}
