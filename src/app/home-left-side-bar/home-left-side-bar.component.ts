import {Component, OnInit} from '@angular/core';
import {ToggleService} from "../Services/toggle-component.service";

@Component({
  selector: '[app-home-left-side-bar]',
  templateUrl: './home-left-side-bar.component.html',
  styleUrl: './home-left-side-bar.component.css'
})
export class HomeLeftSideBarComponent implements OnInit  {
  componentToShow: string = 'app-home-photo-gallery';

  constructor(private toggleService: ToggleService) {}

  ngOnInit(): void {
    this.toggleService.getComponentToShow().subscribe(component => {
      this.componentToShow = component;
    });
  }
}
