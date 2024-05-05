import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home-left-bar',
  templateUrl: './home-left-bar.component.html',
  styleUrl: './home-left-bar.component.css'
})
export class HomeLeftBarComponent {

  @Input({required:true}) sectionName!:string;
  @Input({required:true}) browseAllLink!:string;
  @Input({required:true}) list!:any[];

  isHovered = false;

  toggleHover(state: boolean) {
    this.isHovered = state;
  }
}
