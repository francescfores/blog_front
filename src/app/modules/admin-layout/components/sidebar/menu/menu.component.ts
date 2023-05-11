import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../../models/menu-item";
import {SidebarService} from "../../../services/sidebar.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sidebarOpen= false;
  menuItems: MenuItem[] ;
  shownGroups: string[] = [];

  constructor(
    public sidebarService: SidebarService
  ) {
    this.menuItems=[
      new MenuItem('Dashboard', 'fas fa-light fa-chart-pie','/admin/dashboard','Admin Layouts','pt-4 border-t border-dashed border-bgTern',false,[
        new MenuItem('Dashboard', null,'/admin/dashboard','Base','pt-0',false,null),
        new MenuItem('Analytics', null,'/admin/charts','Base','pt-0',false,null),
      ]),
      new MenuItem('Settings', 'fas fa-light fa-gear','/admin/settings','', 'pt-0',false, null),
      new MenuItem('Users', 'fas fa-light fa-users','/admin/users','', 'pt-0',false, null),
      new MenuItem('Notification', 'fas fa-light fa-bell','/admin/notification','','pt-0 border-bgTern', true, null),

      new MenuItem('Components', 'fas fa-light fa-code','Components','widgets','pt-4',null,[
        new MenuItem('Components', null,'/admin/components',null,'pt-0',false,null),
        new MenuItem('Alerts', null,'/admin/alerts',null,'pt-0',false,null),
        new MenuItem('Badge', null,'/admin/badge',null,'pt-0',false,null),
        new MenuItem('Buttons', null,'/admin/buttons',null,'pt-0',false,null),
        new MenuItem('Dropdowns', null,'/admin/dropdowns',null,'pt-0',false,null),
        new MenuItem('Images', null,'/admin/images',null,'pt-0',false,null),
        new MenuItem('Inputs', null,'/admin/inputs',null,'pt-0',false,null),
        new MenuItem('Menus', null,'/admin/menus',null,'pt-0',false,null),
        new MenuItem('Modals', null,'/admin/modals',null,'pt-0',false,null),
        new MenuItem('Navbars', null,'/admin/navbars',null,'pt-0',false,null),
        new MenuItem('Pagination', null,'/admin/pagination',null,'pt-0',false,null),
        new MenuItem('Popovers', null,'/admin/popovers',null,'pt-0',false,null),
        new MenuItem('Popovers', null,'/admin/popovers',null,'pt-0',false,null),
        new MenuItem('Progressbars', null,'/admin/progressbars',null,'pt-0',false,null),
        new MenuItem('Tabs', null,'/admin/tabs',null,'pt-0',false,null),
        new MenuItem('Tooltips', null,'/admin/tooltips',null,'pt-0',false,null),
      ]),
      new MenuItem('Pages', 'fas fa-light fa-file','pages','Layouts','pt-4',null,[
        new MenuItem('About Us', null,'/about-us',null,'pt-0',false,null),
        new MenuItem('Contact', null,'/contact',null,'pt-0',false,null),
      ]),
      // new MenuItem('Auth', 'fas fa-light fa-lock','pages','Auth Layouts','pt-4  border-b border-dashed border-bgTern',false,[
      new MenuItem('Auth', 'fas fa-light fa-lock','pages','Auth Layouts','pt-4',false,[
        new MenuItem('Signin', null,'/auth/sign-in',null,'pt-0',false,null),
        new MenuItem('Signup', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('Signup', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('Forgot Password', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('New Password', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('Two Steps', null,'/auth/sign-up',null,'pt-0',false,null),
      ]),
    ]
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
