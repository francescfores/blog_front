import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FooterAdminComponent} from "./footer-admin/footer-admin.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {MenuComponent} from "./sidebar/menu/menu.component";
import {SubmenuComponent} from "./sidebar/submenu/submenu.component";
import {Slider3Component} from "./slider-3/slider-3.component";
import {ComponentsModule} from "../../../../../../components/components.module";

@NgModule({
  declarations: [
    FooterAdminComponent,
    SidebarComponent,
    NavbarComponent,
    SidebarComponent,
    MenuComponent,
    SubmenuComponent,
    FooterAdminComponent,
    Slider3Component,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [
    FooterAdminComponent,
    SidebarComponent,
    NavbarComponent,
    Slider3Component,
  ]
})
export class ComponentsModuleLanding3 { }
