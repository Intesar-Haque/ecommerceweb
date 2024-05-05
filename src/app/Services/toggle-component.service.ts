// toggle.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private componentToShowSubject: BehaviorSubject<string> = new BehaviorSubject<string>('app-home-photo-gallery');

  constructor() {}

  getComponentToShow(): Observable<string> {
    return this.componentToShowSubject.asObservable();
  }

  updateComponentToShow(component: string): void {
    this.componentToShowSubject.next(component);
  }
}
