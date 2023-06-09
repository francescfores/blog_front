import {Component, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";
import {ThemeService} from "../../../services/theme/theme.service";
import {BehaviorSubject} from "rxjs";
import {BreadcrumbService} from "../../../components/breadcrumbs/breadcrumService";
// import {SidebarService} from "../services/sidebar.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit  {
  isDarkEnable = false;
  sidebarOpen= false;

  constructor(
    public themeService: ThemeService,
    private breadcrumbService: BreadcrumbService
    // public sidebarService: SidebarService
  ) {
    console.log('frontfrontfront')
  }


  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
    // this.sidebarService.getSidebarState().subscribe(sidebarOpen => {
    //   this.sidebarOpen = sidebarOpen;
    // });
  }
}
