import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ThemeService} from "../../../services/theme/theme.service";
import {BehaviorSubject} from "rxjs";
import {SidebarService} from "../../admin-layout/services/sidebar.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
  isDarkEnable = false;
  sidebarOpen= false;
  registerOpen = false;

  constructor(
    public themeService: ThemeService,
    public sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });

  }
  register(){
    console.log('register');
    this.registerOpen = !this.registerOpen;
  }
}
