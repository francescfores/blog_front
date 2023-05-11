import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ThemeService} from "../../../services/theme/theme.service";
import {BehaviorSubject} from "rxjs";
import {SidebarService} from "../services/sidebar.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
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
