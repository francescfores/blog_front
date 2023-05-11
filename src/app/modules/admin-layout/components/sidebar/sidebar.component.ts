import {Component, Input, OnInit} from "@angular/core";
import {SidebarService} from "../../services/sidebar.service";
import {MenuItem} from "../../models/menu-item";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  sidebarOpen= false;

  constructor(
    public sidebarService: SidebarService
  ) {
    this.sidebarOpen= false;
  }

  ngOnInit() {
    this.sidebarService.getSidebarState().subscribe(sidebarOpen => {
      this.sidebarOpen = sidebarOpen;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

}
