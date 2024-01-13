import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {first, map} from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, pipe} from 'rxjs';
import {MenuItem} from "../modules/blog/components/sidebar/models/menu-item";

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  public menuItems() {
    return [
      new MenuItem('Dashboard', 'fas fa-light fa-chart-pie','/admin/dashboard','Admin Layouts','pt-2 border-t border-dashed border-bgTern',false,[
        new MenuItem('Dashboard', null,'/admin/dashboard','Base','pt-0',false,null),
        new MenuItem('Analytics', null,'/admin/charts','Base','pt-0',false,null),
      ]),
      new MenuItem('Landings', 'fas fa-light fa-code','/landings/','widgets','pt-1',null,[
        new MenuItem('Landing1', null,'/landings/landing1',null,'pt-0',false,null),
        new MenuItem('Landing2', null,'/landings/landing2',null,'pt-0',false,null),
        new MenuItem('Landing3', null,'/landings/landing3',null,'pt-0',false,null),
      ]),
      new MenuItem('Users', 'fas fa-light fa-users','/admin/users','', 'pt-1',false, null),
      new MenuItem('Notification', 'fas fa-light fa-bell','/admin/notification','','pt-1 border-bgTern', true, null),

      new MenuItem('Components', 'fas fa-light fa-code','/admin/components/','widgets','pt-1',null,[
        new MenuItem('Alerts', null,'/admin/components/alerts',null,'pt-0',false,null),
        new MenuItem('Badge', null,'/admin/components/badge',null,'pt-0',false,null),
        new MenuItem('Buttons', null,'/admin/components/buttons',null,'pt-0',false,null),
        new MenuItem('Buttons3d', null,'/admin/components/buttons3d',null,'pt-0',false,null),
        new MenuItem('Cards', null,'/admin/components/cards',null,'pt-0',false,null),
        new MenuItem('Dropdowns', null,'/admin/components/dropdowns',null,'pt-0',false,null),
        new MenuItem('Images', null,'/admin/components/images',null,'pt-0',false,null),
        new MenuItem('Inputs', null,'/admin/components/inputs',null,'pt-0',false,null),
        new MenuItem('Menus', null,'/admin/components/menus',null,'pt-0',false,null),
        new MenuItem('Modals', null,'/admin/components/modals',null,'pt-0',false,null),
        new MenuItem('Navbars', null,'/admin/components/navbars',null,'pt-0',false,null),
        new MenuItem('Pagination', null,'/admin/components/pagination',null,'pt-0',false,null),
        new MenuItem('Popovers', null,'/admin/components/popovers',null,'pt-0',false,null),
        new MenuItem('Progressbars', null,'/admin/components/progressbars',null,'pt-0',false,null),
        new MenuItem('Tabs', null,'/admin/components/tabs',null,'pt-0',false,null),
        new MenuItem('Tooltips', null,'/admin/components/tooltips',null,'pt-0',false,null),
      ]),
      new MenuItem('Pages', 'fas fa-light fa-file','pages','Layouts','pt-1',null,[
        new MenuItem('About Us', null,'/about-us',null,'pt-0',false,null),
        new MenuItem('Contact', null,'/contact',null,'pt-0',false,null),
      ]),
      // new MenuItem('Auth', 'fas fa-light fa-lock','pages','Auth Layouts','pt-2  border-b border-dashed border-bgTern',false,[
      new MenuItem('Auth', 'fas fa-light fa-lock','pages','Auth Layouts','pt-1',false,[
        new MenuItem('Signin', null,'/auth/sign-in',null,'pt-0',false,null),
        new MenuItem('Signup', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('Signup', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('Forgot Password', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('New Password', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('Two Steps', null,'/auth/sign-up',null,'pt-0',false,null),
      ]),
    ]
  }
  public menuItemsAdmin() {
    return [
      new MenuItem('Dashboardsss', 'fas fa-light fa-chart-pie','/admin/dashboard','Admin Layouts','pt-2 border-t border-dashed border-bgTern',false,[
        new MenuItem('Dashboard', null,'/admin/dashboard','Base','pt-0',false,null),
        new MenuItem('Analytics', null,'/admin/charts','Base','pt-0',false,null),
      ]),
      new MenuItem('Blog', 'fas fa-light fa-chart-pie','','Admin Layouts','pt-2 border-t border-dashed border-bgTern',false,[
        new MenuItem('Posts', null,'/admin/blog-admin/posts','Base','pt-0',false,null),
        new MenuItem('Create post', null,'/admin/blog-admin/create','Base','pt-0',false,null),
        new MenuItem('Components', null,'/admin/blog-admin/editor-components','Base','pt-0',false,null),
        // new MenuItem('Update post', null,'/admin/blog/update','Base','pt-0',false,null),
      ]),
      new MenuItem('Editor', 'fas fa-light fa-gear','/admin/editor','', 'pt-1',false, null),
      new MenuItem('Landings', 'fas fa-light fa-code','/admin/landings/','widgets','pt-1',null,[
        new MenuItem('Landing1', null,'/landings/landing1',null,'pt-0',false,null),
        new MenuItem('Landing2', null,'/landings/landing2',null,'pt-0',false,null),
        new MenuItem('Landing3', null,'/landings/landing3',null,'pt-0',false,null),
      ]),
      new MenuItem('Settings', 'fas fa-light fa-gear','/admin/settings','', 'pt-1',false, null),
      new MenuItem('Tutorials', 'fas fa-light fa-gear','/admin/tutorials','', 'pt-1',false, null),
      new MenuItem('Users', 'fas fa-light fa-users','/admin/users','', 'pt-1',false, null),
      new MenuItem('Notification', 'fas fa-light fa-bell','/admin/notification','','pt-1 border-bgTern', true, null),

      new MenuItem('Components', 'fas fa-light fa-code','/admin/components/','widgets','pt-1',null,[
        new MenuItem('Alerts', null,'/admin/components/alerts',null,'pt-0',false,null),
        new MenuItem('Badge', null,'/admin/components/badge',null,'pt-0',false,null),
        new MenuItem('Buttons', null,'/admin/components/buttons',null,'pt-0',false,null),
        new MenuItem('Buttons3d', null,'/admin/components/buttons3d',null,'pt-0',false,null),
        new MenuItem('Cards', null,'/admin/components/cards',null,'pt-0',false,null),
        new MenuItem('Dropdowns', null,'/admin/components/dropdowns',null,'pt-0',false,null),
        new MenuItem('Images', null,'/admin/components/images',null,'pt-0',false,null),
        new MenuItem('Inputs', null,'/admin/components/inputs',null,'pt-0',false,null),
        new MenuItem('Menus', null,'/admin/components/menus',null,'pt-0',false,null),
        new MenuItem('Modals', null,'/admin/components/modals',null,'pt-0',false,null),
        new MenuItem('Navbars', null,'/admin/components/navbars',null,'pt-0',false,null),
        new MenuItem('Pagination', null,'/admin/components/pagination',null,'pt-0',false,null),
        new MenuItem('Popovers', null,'/admin/components/popovers',null,'pt-0',false,null),
        new MenuItem('Progressbars', null,'/admin/components/progressbars',null,'pt-0',false,null),
        new MenuItem('Tabs', null,'/admin/components/tabs',null,'pt-0',false,null),
        new MenuItem('Tooltips', null,'/admin/components/tooltips',null,'pt-0',false,null),
      ]),
      new MenuItem('Pages', 'fas fa-light fa-file','pages','Layouts','pt-1',null,[
        new MenuItem('About Us', null,'/about-us',null,'pt-0',false,null),
        new MenuItem('Contact', null,'/contact',null,'pt-0',false,null),
      ]),
      // new MenuItem('Auth', 'fas fa-light fa-lock','pages','Auth Layouts','pt-2  border-b border-dashed border-bgTern',false,[
      new MenuItem('Auth', 'fas fa-light fa-lock','pages','Auth Layouts','pt-1',false,[
        new MenuItem('Signin', null,'/auth/sign-in',null,'pt-0',false,null),
        new MenuItem('Signup', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('Signup', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('Forgot Password', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('New Password', null,'/auth/sign-up',null,'pt-0',false,null),
        new MenuItem('Two Steps', null,'/auth/sign-up',null,'pt-0',false,null),
      ]),
    ]
  }
}
