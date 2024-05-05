import {Component, OnInit} from '@angular/core';
import {ToggleService} from "../Services/toggle-component.service";

@Component({
  selector: 'app-second-navbar',
  templateUrl: './second-navbar.component.html',
  styleUrl: './second-navbar.component.css'
})
export class SecondNavbarComponent implements OnInit  {
  componentToShow: string = 'app-store';
  isSidebarVisible: boolean = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  closeSidebar() {
    this.isSidebarVisible = false;
  }

  constructor(private toggleService: ToggleService) {}

  ngOnInit(): void {
    this.toggleService.getComponentToShow().subscribe(component => {
      this.componentToShow = component;
    });
  }

  onItemClick(component: string): void {
    this.toggleService.updateComponentToShow(component);
  }


}
