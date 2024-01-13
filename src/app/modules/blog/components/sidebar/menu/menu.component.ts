import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../models/menu-item";
import {SidebarService} from "../services/sidebar.service";
import {MenuService} from "../../../../../services/menu.service";

@Component({
  selector: 'app-menu-blog',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sidebarOpen= false;
  menuItems: MenuItem[] ;
  shownGroups: string[] = [];

  constructor(
    public sidebarService: SidebarService,
    public menuService: MenuService
  ) {
    this.menuItems=this.menuService.menuItems()
  }
  ngOnInit() {
    this.sidebarService.getSidebarState().subscribe(sidebarOpen => {
      this.sidebarOpen = sidebarOpen;
    });
    for (const menuItem of this.menuItems) {
      if (menuItem.group && !this.shownGroups.includes(menuItem.group)) {
        this.shownGroups.push(menuItem.group);
      }
    }
  }
}
