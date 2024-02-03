import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import $ from 'jquery';
import {Router} from "@angular/router";
import {ThemeService} from "../../../../services/theme/theme.service";
import {SidebarService} from "../../services/sidebar.service";
import {User} from "../../../../models/user";
import {AuthenticationService} from "../../../../services/api/authentication.service";
import {AuthenticationAdminService} from "../../../../services/api/authentication-admin.service";
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
  client!:User;

  constructor(
    private router: Router,
    public themeService: ThemeService,
    public sidebarService: SidebarService,
    public authenticationAdminService: AuthenticationAdminService
  ) {
  }

  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
    this.sidebarService.getSidebarState().subscribe(sidebarOpen => {
      this.sidebarOpen = sidebarOpen;
    });
    this.client = this.authenticationAdminService.currentUserValue
    if (!this.client) {
      //this.router.navigate(['/auth/login']);
    }

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
    if(this.transparent){
      if(window.scrollY <= 50){
      $('#navbar').addClass('bg-transparent');
      $('#navbar').removeClass('bg-primary');
    }else {
      $('#navbar').removeClass('bg-transparent');
      $('#navbar').addClass('bg-primary');
    }
    }
  }

  setLoginOpen() {
    this.loginOpen = !this.loginOpen;
  }

  logOut(){
    this.authenticationAdminService.logout();
  }
}

