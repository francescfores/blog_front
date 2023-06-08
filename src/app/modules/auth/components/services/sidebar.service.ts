import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarOpen = new BehaviorSubject<boolean>(false);

  constructor() {
    const savedState = localStorage.getItem('sidebarState');
    if (savedState) {
      this.sidebarOpen.next(savedState === 'open');
    }
  }

  toggleSidebar() {
    console.log('change')
    this.sidebarOpen.next(!this.sidebarOpen.value);
    localStorage.setItem('sidebarState', this.sidebarOpen.value ? 'open' : 'closed');
  }

  getSidebarState() {
    return this.sidebarOpen.asObservable();
  }
}
