import { Component } from '@angular/core';

@Component({
  selector: '[app-home-right-side-bar]',
  templateUrl: './home-right-side-bar.component.html',
  styleUrl: './home-right-side-bar.component.css'
})
export class HomeRightSideBarComponent {

  currentBar = ''

  mensList = [
    {
      "name": "Shirts",
      "url": "example.com/shirts"
    },
    {
      "name": "Fashion Hoodies & Sweatshirts",
      "url": "example.com/hoodies-sweatshirts"
    },
    {
      "name": "Jackets & Coats",
      "url": "example.com/jackets-coats"
    },
    {
      "name": "Jeans",
      "url": "example.com/jeans"
    },
    {
      "name": "Pants",
      "url": "example.com/pants"
    },
    {
      "name": "Suits & Sport Coats",
      "url": "example.com/suits-sportcoats"
    },
    {
      "name": "Active",
      "url": "example.com/active"
    }
  ]

}
