import {Component,EventEmitter,Output} from '@angular/core';
import {ToggleService} from "../Services/toggle-component.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() sidebarClicked: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.sidebarClicked.emit();
  }

  constructor(private toggleService: ToggleService) {}

  onItemClick(component: string): void {
    this.toggleService.updateComponentToShow(component);
  }
}
