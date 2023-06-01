import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../../../../services/theme/theme.service";
import {SidebarService} from "./components/sidebar/services/sidebar.service";

@Component({
  selector: 'app-landing-page1',
  templateUrl: './landing-page1.component.html',
  styleUrls: ['./landing-page1.component.css']
})
export class LandingPage1Component implements OnInit {
  isDarkEnable = false;
  sidebarOpen= false;

  constructor(
    public themeService: ThemeService,
    public sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
    this.sidebarService.getSidebarState().subscribe(sidebarOpen => {
      this.sidebarOpen = sidebarOpen;
    });
  }
}
