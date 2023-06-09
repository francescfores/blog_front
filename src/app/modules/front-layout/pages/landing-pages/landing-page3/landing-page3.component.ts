import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemeService} from "../../../../../services/theme/theme.service";
// import {SidebarService} from "./components/sidebar/services/sidebar.service";

@Component({
  selector: 'app-landing-page3',
  templateUrl: './landing-page3.component.html',
  styleUrls: ['./landing-page3.component.css']
})
export class LandingPage3Component implements OnInit {
  isDarkEnable = false;
  sidebarOpen= false;
  constructor(
    public themeService: ThemeService,
    // public sidebarService: SidebarService
) {
  }
  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
    // this.sidebarService.getSidebarState().subscribe(sidebarOpen => {
    //   this.sidebarOpen = sidebarOpen;
    // });

  }
  // Función para detectar el scroll y determinar la dirección

// Evento de desplazamiento

}
