import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import * as $ from "jquery";
import {Router} from "@angular/router";
import {ThemeService} from "../../../../services/theme/theme.service";
import {SidebarService} from "../../components/sidebar/services/sidebar.service";
// import {AuthenticationService} from "../../../services/api/authentication.service";
// import {Cart} from "../../../models/cart";
// import {Client} from "../../../models/client";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})

@HostListener('window:scroll', ['$event'])

export class NavbarComponent implements OnInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  isDarkEnable=false;
  @Input() transparent = false;
  sidebarOpen = false;

  loginOpen = false;
  // client :Client;

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
    this.sidebarService.getSidebarState().subscribe(sidebarOpen => {
      this.sidebarOpen = sidebarOpen;
    });
    // this.client = this.authenticationService.currentClientValue
    // if (!this.client) {
    //   //this.router.navigate(['/auth/login']);
    // }

    $('#navbar').removeClass('bg-transparent');
    $('#navbar').addClass('bg-bgPrim');

    if(this.transparent){
      $('#navbar').addClass('bg-transparent');
      $('#navbar').removeClass('bg-bgPrim');
      window.addEventListener('scroll', this.scroll, true)
    }
  }

  changeTheme() {
    this.isDarkEnable = !this.isDarkEnable;
    this.themeService.changeTheme(this.isDarkEnable);
  }
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  scroll = (): void => {
    if(window.scrollY <= 50){
      $('#navbar').addClass('bg-transparent');
      $('#navbar').removeClass('bg-primary');
    }else {
      $('#navbar').removeClass('bg-transparent');
      $('#navbar').addClass('bg-primary');
    }

  }

  setLoginOpen() {
    this.loginOpen = !this.loginOpen;
  }

  logOut(){
    // this.authenticationService.logout();
  }
}

