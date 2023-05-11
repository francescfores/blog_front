import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ThemeService} from "../../../../services/theme/theme.service";
import {SidebarService} from "../../../admin-layout/services/sidebar.service";
import * as $ from "jquery";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isDarkEnable=false;

  constructor(
    private router: Router,
    public themeService: ThemeService,
    public sidebarService: SidebarService
  ) {
  }
  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
  }

  changeTheme() {
    this.isDarkEnable = !this.isDarkEnable;
    this.themeService.changeTheme(this.isDarkEnable);
  }
}
